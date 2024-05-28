import { UseStoreModalType } from "@/lib/types";
import { create } from "zustand";

export const useStoreModal = create<UseStoreModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
