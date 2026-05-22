import { Outlet } from "react-router";
import DashSidebar from "./DashSide";

const DashboardRoot = () => {
    return (
        <div>
            <DashSidebar></DashSidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardRoot;