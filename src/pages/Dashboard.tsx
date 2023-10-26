import { RecentTasks } from "../components/Tasks";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Grid container>
        <Grid item md={9}>
          <RecentTasks />
          <Grid container>
            <Grid item md={6}>
              <RecentTasks />
            </Grid>
            <Grid item md={6}>
              <RecentTasks />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <div className="right-side"></div>
        </Grid>
      </Grid>
    </>
  );
}
