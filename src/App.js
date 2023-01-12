import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";

const App = () => {
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
