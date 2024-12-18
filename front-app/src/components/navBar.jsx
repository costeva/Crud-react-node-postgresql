import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
export const NavBar = () => {
  const Navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Pern Stack
              </Link>
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={() => Navigate("/tasks/new")}
            >
              New tasks
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
