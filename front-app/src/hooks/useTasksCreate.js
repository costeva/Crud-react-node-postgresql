import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "./useLoading";
import { createTask, taskUpdate, getTask } from "../services/tasks";

export const useTasksCreate = (id) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    if (id) {
      getTask(id).then((data) => {
        setTask({ title: data.title, description: data.description });
      });
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (id) {
      await taskUpdate(id, task);
    } else {
      await createTask(task);
    }
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
