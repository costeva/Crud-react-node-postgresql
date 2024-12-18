import {
  Card,
  Grid2,
  Typography,
  CardContent,
  TextField,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTasksCreate } from "../hooks/useTasksCreate";

const TaskForm = () => {
  const { handleSubmit, handelChange, loading, task } = useTasksCreate();

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
    >
      <Grid2 item xs={12} sm={8} md={6}>
        <Card sx={{ mt: 5, p: 2 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Create Task
          </Typography>
          <CardContent>
            {" "}
            <Box
              onSubmit={handleSubmit}
              component="form"
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                name="title"
                required
                onChange={handelChange}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                name="description"
                multiline
                rows={4}
                required
                onChange={handelChange}
              />
              <Box mt={2}>
                <Button
                  disabled={!task.title || !task.description}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Create Task"
                  )}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default TaskForm;
