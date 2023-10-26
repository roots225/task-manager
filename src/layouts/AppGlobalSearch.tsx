import { TextField } from "@mui/material";
import { Search } from "lucide-react";

export default function AppGlobalSearch() {
  return (
    <form className="global-search">
      <div className="custom-search">
        <TextField variant="outlined" />
        <Search />
      </div>
    </form>
  );
}
