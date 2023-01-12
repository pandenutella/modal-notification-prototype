import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import useLoadNotifications from "./hooks/useLoadNotifications";
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";

const App = () => {
  useLoadNotifications();

  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
