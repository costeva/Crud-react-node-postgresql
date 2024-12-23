import { CardDetail } from "../components/CardDetail";
import { Box, Button } from "@mui/material";
import { useDetailTask } from "../hooks/useDetailTask";
import { useParams, useNavigate } from "react-router";

export const DatailsView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { detail, loading } = useDetailTask(id);

  return (
    <div>
      <h1>Details</h1>
      {loading ? <h2>Loading...</h2> : <CardDetail details={detail} />}
      <Box sx={{ marginTop: "50px" }}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back
        </Button>
      </Box>
    </div>
  );
};
