import { useLoading } from "./useLoading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTask } from "../services/tasks";
export const useDetailTask = (id) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    getTask(id)
      .then((data) => {
        setDetail(data);
        console.log(data, "useDetailTask");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        navigate("/");
      });
    console.log(detail, "useDetailTask");
  }, [id]);

  return { detail, loading };
};
