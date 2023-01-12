import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import NotificationManager from "./components/notification/NotificationManager";
import useNotifications from "./hooks/useNotifications";
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";

const App = () => {
  const { initialize, initialized, showAutomatic } = useNotifications();

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (!initialized) return;

    showAutomatic();
  }, [initialized]);

  return (
    <HashRouter>
      <PageLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <NotificationManager />
      </PageLayout>
    </HashRouter>
  );
};

export default App;
