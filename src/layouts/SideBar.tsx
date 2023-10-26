import { LogOut } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="logo"></div>
      <div className="menus"></div>
      <div className="footer">
        <LogOut color="white" />
      </div>
    </aside>
  );
}
