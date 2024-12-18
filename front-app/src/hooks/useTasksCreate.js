import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "./useLoading";
import { createTask } from "../services/tasks";

export const useTasksCreate = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createTask(task);
    setLoading(false);
    navigate("/");
  };

  const handelChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return { handleSubmit, handelChange, loading, setLoading, task };
};
