import { AccountFormValues } from "@/pages/account/account-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AccountState = {
  account: AccountFormValues | null;
};

export type AccountActions = {
  setAccountValues: (data: AccountFormValues | null) => void;
};

export const useAccountStore = create<AccountState & AccountActions>()(
  persist(
    (set) => ({
      account: null,
      setAccountValues: (account) => {
        set({ account });
      },
    }),
    { name: "account" }
  )
);
