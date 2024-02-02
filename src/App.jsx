import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Favorite from "./pages/Favorite";
import NavBar from "./NavBar.jsx"
import "./main.css"

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
