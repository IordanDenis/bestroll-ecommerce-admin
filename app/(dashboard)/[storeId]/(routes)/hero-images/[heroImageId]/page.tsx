import HeroImagesForm from "@/components/hero-images-form";
import { getHeroImage } from "@/server/queries";
import { auth } from "@clerk/nextjs/server";

export default async function HeroImagePage({
  params,
}: {
  params: { heroImageId: string };
}) {
  const heroImage = await getHeroImage(params.heroImageId);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <HeroImagesForm initialData={heroImage} />
      </div>
    </div>
  );
}
