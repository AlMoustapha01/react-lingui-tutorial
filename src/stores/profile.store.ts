import { ProfileFormValues } from "@/pages/profile/profile-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProfileState = {
  profile: ProfileFormValues | null;
};

export type ProfileActions = {
  setProfileValues: (data: ProfileFormValues | null) => void;
};

export const useProfileStore = create<ProfileState & ProfileActions>()(
  persist(
    (set) => ({
      profile: null,
      setProfileValues: (profile) => {
        set({ profile });
      },
    }),
    { name: "profile" }
  )
);
