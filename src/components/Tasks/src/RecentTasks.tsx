import { Card } from "@mui/material";
import { ChevronRight } from "lucide-react";

export default function RecentTasks() {
  return (
    <Card className="recent-tasks">
      <div className="recent-tasks-header">
        <div className="title">Tâches récentes</div>
        <div className="action">
          <span>Tout voir</span> <ChevronRight />
        </div>
      </div>
    </Card>
  );
}
