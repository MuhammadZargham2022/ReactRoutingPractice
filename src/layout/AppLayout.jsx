import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="applayout">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
