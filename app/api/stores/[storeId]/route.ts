import { prisma } from "@/server/prisma";
import { deleteStore, updateStore } from "@/server/queries";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!name) return new NextResponse("Name is required", { status: 400 });

    if (!params.storeId)
      return new NextResponse("Store id is required", { status: 400 });

    const store = await updateStore(userId, params.storeId, name);

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// even if req is not being used, it can't be deleted since params always has to be the 2nd argument
export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!params.storeId)
      return new NextResponse("Store id is required", { status: 400 });

    const store = await deleteStore(userId, params.storeId);

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
