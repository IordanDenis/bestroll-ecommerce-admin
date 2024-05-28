"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { useParams, useRouter } from "next/navigation";

export function HeroImagesClient() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Hero Images (0)"
        description="Manage hero images for your store"
      />
      <Button onClick={() => router.push(`/${params.storeId}/hero-images/new`)}>
        <Plus className="mr-2 h-4 w-4" />
        Add New
      </Button>
    </div>
  );
}
