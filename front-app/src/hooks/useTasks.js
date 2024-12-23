import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/tasks";
import { useLoading } from "./useLoading";
import { Delete, Visibility, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router";
export const useTasksList = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const { loading, setLoading } = useLoading();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
            paddingRight: "8px",
          }}
        >
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleModify(params.row.id)}
          >
            <Edit />
          </IconButton>
          <IconButton
            color="info"
            size="small"
            onClick={() => handleDetail(params.row.id)}
          >
            <Visibility />
          </IconButton>
          <IconButton
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            <Delete />
          </IconButton>
        </Box>
      ),
    },
  ];
  function handleDelete(id) {
    deleteTask(id);
    setRows(rows.filter((row) => row.id !== id));
  }

  function handleModify(id) {
    navigate(`/tasks/${id}/edit`);
  }

  function handleDetail(id) {
    navigate(`/tasks/${id}/detail`);
  }

  useEffect(() => {
    setLoading(true);
    getTasks()
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [setLoading]);

  return { columns, loading, rows };
};
