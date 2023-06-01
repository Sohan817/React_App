import React from "react";
const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <a href="/admin/ProductListPage">Manage Products</a>
        </li>
        <li>
          <a href="/admin/orders">Manage Orders</a>
        </li>
        <li>
          <a href="/admin/users">Manage Users</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
