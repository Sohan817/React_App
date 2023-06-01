import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import ProductListPage from "./Components/ProductListPage";
import AdminDashboard from "./Components/AdminDashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/RegistrationPage" Component={RegistrationPage} />
        <Route path="/ProductListPage" Component={ProductListPage} />
        <Route path="/AdminDashboard" Component={AdminDashboard} />
      </Routes>
    </Router>
  );
};

export default App;
