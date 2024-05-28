import SettingsForm from "@/components/settings-form";
import { SettingsPageProps } from "@/lib/types";
import { findStoreById } from "@/server/queries";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const store = await findStoreById(userId, params.storeId);

  if (!store) redirect("/");

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}
