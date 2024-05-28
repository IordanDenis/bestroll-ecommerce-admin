import { PopoverTrigger } from "@/components/ui/popover";
import { HeroImage, Store } from "@prisma/client";

export type UseStoreModalType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export type ModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

export type StoreSwitcherProps = PopoverTriggerProps & {
  items: Store[];
};

export type SettingsPageProps = {
  params: {
    storeId: string;
  };
};

export type SettingsFormProps = {
  initialData: Store;
};

export type HeadingProps = {
  title: string;
  description: string;
};

export type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};

export type ApiAlertProps = {
  title: string;
  description: string;
  variant: "public" | "admin";
};

export type HeroImagesFormProps = {
  initialData: HeroImage | null;
};

export type ImageUploadProps = {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
};
