import { Separator } from "@/components/ui/separator";
import { DisplayForm } from "./display-form";
import { Helmet } from "react-helmet-async";

export default function SettingsDisplayPage() {
    return (
        <>
            <Helmet>
                <title>
                    {`Turn items on or off to control what's displayed in the app.`} - {`React Lingui.js Tutorial`}
                </title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Display</h3>
                    <p className="text-sm text-muted-foreground">
                        Turn items on or off to control what&apos;s displayed in the app.
                    </p>
                </div>
                <Separator />
                <DisplayForm />
            </div>

        </>

    )
}