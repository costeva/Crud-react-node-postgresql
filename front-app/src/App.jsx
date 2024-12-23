import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomeView } from "./page/Home";
import TaskForm from "./components/taskFrom";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
          <Route path="/tasks/:id/detail" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
