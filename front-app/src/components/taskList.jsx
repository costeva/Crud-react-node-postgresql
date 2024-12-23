import { DataGrid } from "@mui/x-data-grid";
import { useTasksList } from "../hooks/useTasks";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
const TaskList = () => {
  const { rows, columns, loading } = useTasksList();
  return (
    <>
      <h1>Tasks List</h1>
      <div style={{ height: 600, width: "100%" }}>
        <ThemeProvider theme={theme}>
          <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            disableColumnReorder={false}
            getRowId={(row) => row.id}
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default TaskList;
