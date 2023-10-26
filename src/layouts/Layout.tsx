import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import AppHeader from "./AppHeader";

export default function Layout() {
  return (
    <div className="app">
      <SideBar />
      <div className="main-content">
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
}
