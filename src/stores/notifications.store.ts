import { NotificationsFormValues } from "@/pages/notifications/notifications-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type NotificationsState = {
  notifications: NotificationsFormValues | null;
};

export type NotificationsActions = {
  setNotificationsValues: (data: NotificationsFormValues | null) => void;
};

export const useNotificationsStore = create<
  NotificationsState & NotificationsActions
>()(
  persist(
    (set) => ({
      notifications: {
        type: "all",
        communication_emails: false,
        marketing_emails: false,
        social_emails: true,
        security_emails: true,
      },
      setNotificationsValues: (notifications: any) => {
        set({ notifications });
      },
    }),
    { name: "notifications" }
  )
);
