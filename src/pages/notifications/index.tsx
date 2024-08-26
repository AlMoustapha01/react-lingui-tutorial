import { Separator } from "@/components/ui/separator";
import { NotificationsForm } from "./notifications-form";
import { Helmet } from "react-helmet-async";

export default function SettingsNotificationsPage() {
    return (
        <>
            <Helmet>
                <title>
                    {`Change your notification preference`} - {`React Lingui.js Tutorial`}
                </title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                        Configure how you receive notifications.
                    </p>
                </div>
                <Separator />
                <NotificationsForm />
            </div>
        </>

    )
}