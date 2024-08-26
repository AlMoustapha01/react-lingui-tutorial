import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";
import { Helmet } from "react-helmet-async";

export default function SettingsAccountPage() {
    return (
        <>
            <Helmet>
                <title>
                    {`Edit your account information`} - {`React Lingui.js Tutorial`}
                </title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Account</h3>
                    <p className="text-sm text-muted-foreground">
                        Update your account settings. Set your preferred language and
                        timezone.
                    </p>
                </div>
                <Separator />
                <AccountForm />
            </div>
        </>

    )
}