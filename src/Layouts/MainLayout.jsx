import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;