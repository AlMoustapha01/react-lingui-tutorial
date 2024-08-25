import { DisplayFormValues } from "@/pages/display/display-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DisplayState = {
  display: DisplayFormValues | null;
};

export type DisplayActions = {
  setDisplayValues: (data: DisplayFormValues | null) => void;
};

export const useDisplayStore = create<DisplayState & DisplayActions>()(
  persist(
    (set) => ({
      display: {
        items: ["recents", "home"],
      },
      setDisplayValues: (display) => {
        set({ display });
      },
    }),
    { name: "display" }
  )
);
