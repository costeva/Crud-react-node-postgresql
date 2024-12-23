import TaskList from "../components/taskList";
import { Container, Box, Typography } from "@mui/material";

export const HomeView = () => {
  return (
    <Container maxWidth="lx" sx={{ paddingX: 4 }} disableGutters>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          sx={{ paddingTop: 4 }}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Home
        </Typography>
        <Typography sx={{ paddingY: 4 }} variant="body1" color="white">
          Here you will see the complete list of tasks. By clicking on the
          actions, you can edit, view details, or delete.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <TaskList />
      </Box>
    </Container>
  );
};
