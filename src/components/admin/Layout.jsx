import React from "react";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
    <>
        <AdminHeader/>
        <Outlet/>
    </>
);

export default MainLayout;
