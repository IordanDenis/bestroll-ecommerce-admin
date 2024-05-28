import Navbar from "@/components/navbar";
import { findStoreById } from "@/server/queries";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const store = await findStoreById(userId, params.storeId);

  if (!store) redirect("/");

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
