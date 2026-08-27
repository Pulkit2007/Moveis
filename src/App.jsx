import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favourite"
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/NavBar";

export default function App() {

  return (MovieProvider>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorite/>}></Route>
      </Routes>

    </main> 
  </MovieProvider> 
  )
}
