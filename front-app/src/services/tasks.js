const TASKS_API = "http://localhost:4000/tasks";

export const getTasks = async () => {
  const response = await fetch(TASKS_API);
  const data = await response.json();
  return data;
};

export const createTask = async (task) => {
  console.log(task);
  const response = await fetch(TASKS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};
