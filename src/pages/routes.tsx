import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SettingsLayout from "./layout";
import SettingsProfilePage from "./profile";
import SettingsAccountPage from "./account";
import SettingsAppearancePage from "./appearance";
import SettingsDisplayPage from "./display";
import SettingsNotificationsPage from "./notifications";

export const routes = createRoutesFromElements(
    <Route element={<SettingsLayout />}>
        <Route path="/" element={<SettingsProfilePage />} />
        <Route path="/account" element={<SettingsAccountPage />} />
        <Route path="/appearance" element={<SettingsAppearancePage />} />
        <Route path="/display" element={<SettingsDisplayPage />} />
        <Route path="/notifications" element={<SettingsNotificationsPage />} />
        <Route path="/profile" element={<SettingsProfilePage />} />
    </Route>
)

export const router = createBrowserRouter(routes);
