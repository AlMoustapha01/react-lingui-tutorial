import { AppearanceFormValues } from "@/pages/appearance/appearance-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AppearanceState = {
  appearance: AppearanceFormValues;
};

export type AppearanceActions = {
  setAppearanceValues: (data: AppearanceFormValues) => void;
};

export const useAppearanceStore = create<AppearanceState & AppearanceActions>()(
  persist(
    (set) => ({
      appearance: {
        font: "inter",
        theme: "system",
      },
      setAppearanceValues: (appearance) => {
        set({ appearance });
      },
    }),
    { name: "appearance" }
  )
);
