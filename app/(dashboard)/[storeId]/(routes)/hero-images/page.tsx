import { HeroImagesClient } from "@/components/hero-images-client";

export default function HeroImagesPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <HeroImagesClient />
      </div>
    </div>
  );
}
