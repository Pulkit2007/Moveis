import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

export default function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorite-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
