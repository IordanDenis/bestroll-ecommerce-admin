import { ImageUploadProps } from "@/lib/types";
import { useEffect, useState } from "react";

export function ImageUpload({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function onUpload(result: any) {
    onChange(result.info.secure_url);
  }

  if (!isMounted) return null;

  return <div>Image upload</div>;
}
