import { ProfileForm } from "@/pages/profile/profile-form";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";

export default function SettingsProfilePage() {
    return (
        <>
            <Helmet>
                <title>
                    {`Edit your profile information`} - {`React Lingui.js Tutorial`}
                </title>
            </Helmet>
            <div className="space-y-6">

                <div>
                    <h3 className="text-lg font-medium">Profile</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                </div>
                <Separator />
                <ProfileForm />
            </div>
        </>

    )
}