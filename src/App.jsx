import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favourite"


export default function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorite/>}></Route>
      </Routes>

    </main>
  )
}
