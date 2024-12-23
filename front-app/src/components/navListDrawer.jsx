import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Box,
} from "@mui/material";

import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export const NavBarList = () => {
  return (
    <Box sx={{ width: "500", bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
  );
};
