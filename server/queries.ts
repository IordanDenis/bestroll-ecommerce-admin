import "server-only";
import { prisma } from "./prisma";

export async function createStore(userId: string, name: string) {
  if (!userId) throw new Error("Unathorized");

  return await prisma.store.create({
    data: {
      name,
      userId,
    },
  });
}

export async function findStoreById(userId: string, storeId: string) {
  if (!userId) throw new Error("Unathorized");

  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  return store;
}

export async function findFirstAvailableStore(userId: string) {
  if (!userId) throw new Error("Unathorized");

  const store = await prisma.store.findFirst({
    where: {
      userId,
    },
  });

  // if (!store)
  //   throw new Error("No store for the specified user id has been found");
  // TODO: instead of throwing error, redirect to home in this function and remove it from layout

  return store;
}

export async function findStoreByIdd(storeId: string) {
  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
    },
  });

  if (!store) throw new Error("Store with the specified id has not been found");

  return store;
}

export async function getStores(userId: string) {
  if (!userId) throw new Error("Unathorized");

  return await prisma.store.findMany({
    where: {
      userId,
    },
  });
}

export async function updateStore(
  userId: string,
  storeId: string,
  name: string
) {
  if (!userId) throw new Error("Unathorized");

  return await prisma.store.update({
    where: {
      id: storeId,
      userId,
    },
    data: { name },
  });
}

export async function deleteStore(userId: string, storeId: string) {
  if (!userId) throw new Error("Unathorized");

  return await prisma.store.delete({
    where: {
      id: storeId,
      userId,
    },
  });
}

export async function getHeroImage(heroImageId: string) {
  return await prisma.heroImage.findUnique({
    where: {
      id: heroImageId,
    },
  });
}
