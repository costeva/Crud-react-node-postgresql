import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-cell": {
            backgroundColor: "#f0f0f0",
            color: "#333",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#d0d0d0",
            color: "#000",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "white",
          },
        },
      },
    },
  },
});

export default theme;
