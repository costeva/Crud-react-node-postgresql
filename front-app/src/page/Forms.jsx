import TaskForm from "../components/taskFrom";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { Container } from "@mui/material";
export const Forms = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lx">
      <h1>Forms</h1>
      <TaskForm />
      <Box sx={{ marginTop: "50px" }}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </Box>
    </Container>
  );
};
