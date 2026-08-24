import MovieCard from "../components/MovieCard";
import {useState} from "react";


export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");


  const movies = [
    { id: 1, title: "Batman Begins", release_date: "13/09/2005" },
    { id: 2, title: "Dark Knight", release_date: "13/09/2008" },
    { id: 3, title: "Dark Knight Rises", release_date: "13/09/2011" },
  ];


  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("")
    
    }

  return (


    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Enter movie to search" className="movie-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
