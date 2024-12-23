const TASKS_API = "http://localhost:4000/tasks";

export const getTasks = async () => {
  const response = await fetch(TASKS_API);
  const data = await response.json();
  return data;
};

export const getTask = async (id) => {
  const response = await fetch(`${TASKS_API}/${id}`);
  const data = await response.json();
  return data;
};

export const createTask = async (task) => {
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

export const deleteTask = async (id) => {
  console.log("Delete task:", id);
  const response = await fetch(`${TASKS_API}/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};

export const taskUpdate = async (id, task) => {
  console.log("Update task:", id, task);
  const response = await fetch(`${TASKS_API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  console.log(response);
};
