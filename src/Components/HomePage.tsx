import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <div>
        <h2>Login</h2>
        <p>Already have an account? Login now!</p>
        <Link to="/LoginPage">Login</Link>
      </div>

      <div>
        <h2>Register</h2>
        <p>Don't have an account yet? Register now!</p>
        <Link to="/RegistrationPage">Register</Link>
      </div>
      <div>
        <h2>Product Lists</h2>
        <Link to="/ProductListPage">Product Lists</Link>
      </div>
      <div>
        <h2>Admin</h2>
        <Link to="/AdminDashboard">Admin</Link>
      </div>
    </div>
  );
};

export default HomePage;
