import { Separator } from "@/components/ui/separator";
import { AppearanceForm } from "./appearance-form";
import { Helmet } from "react-helmet-async";


export default function SettingsAppearancePage() {
    return (
        <>
            <Helmet>
                <title>
                    {`Change appearance of your app`} - {`React Lingui.js Tutorial`}
                </title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Appearance</h3>
                    <p className="text-sm text-muted-foreground">
                        Customize the appearance of the app. Automatically switch between day
                        and night themes.
                    </p>
                </div>
                <Separator />
                <AppearanceForm />
            </div>
        </>

    )
}