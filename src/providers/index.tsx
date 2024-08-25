import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./theme";
import { HelmetProvider } from "react-helmet-async";
import { helmetContext } from "@/constants/helmet";
import { Toaster } from "@/components/ui/toaster";

export const Providers = () => (
    <ThemeProvider>
        <HelmetProvider context={helmetContext}>
            <Outlet />
            <Toaster />
        </HelmetProvider>
    </ThemeProvider>
)