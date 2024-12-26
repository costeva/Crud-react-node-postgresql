import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomeView } from "./page/Home";
import { DatailsView } from "./page/Details";
import { Forms } from "./page/Forms";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/tasks/new" element={<Forms />} />
          <Route path="/tasks/:id/edit" element={<Forms />} />
          <Route path="/tasks/:id/detail" element={<DatailsView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
