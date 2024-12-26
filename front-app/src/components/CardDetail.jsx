import { Typography, Grid2, Box } from "@mui/material";

export const CardDetail = ({ details }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
      }}
    >
      <Grid2 container spacing={20} columns={12} sx={{ paddingTop: "20px" }}>
        <Grid2 size={12}>
          <Typography variant="subtitle1" fontWeight="bold">
            ID:
          </Typography>
          <Typography variant="body1" fontSize="1.2rem">
            {details.id || "No Title"}
          </Typography>
        </Grid2>
        <Grid2 container columns={12} size={16}>
          <Grid2 size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Title:
            </Typography>
            <Typography variant="body1" fontSize="1.2rem">
              {details.title || "No Title"}
            </Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Description:
            </Typography>
            <Typography variant="body1" fontSize="1.2rem">
              {details.Description || "No Title"}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
