import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { CheckCircle2, ClipboardList, Archive, Trash2 } from "lucide-react";

export default function Tasks() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <List>
              <ListItem secondaryAction={10}>
                <ListItemAvatar>
                  <ClipboardList />
                </ListItemAvatar>

                <ListItemText primary="Récents" />
              </ListItem>

              <ListItem secondaryAction={10}>
                <ListItemAvatar>
                  <CheckCircle2 />
                </ListItemAvatar>

                <ListItemText primary="Terminés" />
              </ListItem>

              <ListItem secondaryAction={10}>
                <ListItemAvatar>
                  <Archive />
                </ListItemAvatar>

                <ListItemText primary="Archivés" />
              </ListItem>

              <ListItem secondaryAction={10}>
                <ListItemAvatar>
                  <Trash2 />
                </ListItemAvatar>

                <ListItemText primary="Supprimés" />
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
