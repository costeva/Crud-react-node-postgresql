import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { NavBarList } from "./navListDrawer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export const NavBar = () => {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton color="#fff">
            <MenuIcon color="#fff" size="large" onClick={() => setOpen(true)} />
          </IconButton>
          <Typography variant="h6"> Pern Stack</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: { width: 250 },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavBarList />
      </Drawer>
    </>
  );
};
