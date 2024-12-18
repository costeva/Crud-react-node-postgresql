import { Route, Routes, BrowserRouter } from "react-router-dom";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskFrom";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="container mx-auto px-20">
          <NavBar />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks/new" element={<TaskForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
