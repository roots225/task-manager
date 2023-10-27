import {
  LogOut,
  Backpack,
  FileBarChart2,
  CalendarDays,
  Settings,
  ClipboardList,
} from "lucide-react";
import { MenuList, MenuItem, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const iconSize = 28;
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    console.log(link);
    navigate(link);
  };

  return (
    <aside className="sidebar">
      <div className="logo"></div>
      <div className="menus">
        <MenuList>
          <MenuItem>
            <ListItemIcon onClick={() => handleClick("/app/dashboard")}>
              <Backpack size={iconSize} color="white" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon onClick={() => handleClick("/app/tasks")}>
              <FileBarChart2 size={iconSize} color="white" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ClipboardList size={iconSize} color="white" />
            </ListItemIcon>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings size={iconSize} color="white" />
            </ListItemIcon>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <CalendarDays size={iconSize} color="white" />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </div>
      <div className="footer">
        <LogOut size={iconSize} color="white" />
      </div>
    </aside>
  );
}
