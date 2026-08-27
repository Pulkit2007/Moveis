import { useContext } from "react";
import { useMovieContext } from "../context/MovieContext";



export default function MovieCard({ movie }) {
  const {favorites,isFavorite, addToFavorites, removeFromFavorites  } = useMovieContext()
  const favorite = isFavorite(movie.id)

  
  function onfavoriteclick() {
    alert("clicked");
  }

  return (
    <>
      <div className="Movie-Card">
        <div className="Movie-Poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} ` } alt={movie.title} />
          <div className="Movie-overlay">
            <button className= {`favorite-btn ${favorite ? "active" : ""}`} onClick={onfavoriteclick}>
              💖
            </button>
          </div>
        </div>
        
        <div className="Movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}
