export default function MovieCard({ movie }) {
  function onfavoriteclick() {
    alert("clicked");
  }

  return (
    <>
      <div className="Movie-Card">
        <div className="Movie-Poster">
          <img src={movie.image} alt={movie.title} />
          <div className="Movie-overlay">
            <button className="fav-btn" onClick={onfavoriteclick}>
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
