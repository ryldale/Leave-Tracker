import { Route, Routes } from "react-router-dom";
import LoginPage from "./modules/login/pages/LoginPage";
import DashboardPage from "./modules/dashboard/pages/DashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
