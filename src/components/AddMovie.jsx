import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // You can create AddMovie.css if needed

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterImage: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", movie);
    navigate("/"); // Redirect to Dashboard
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} required />
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={movie.releaseYear} onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" value={movie.synopsis} onChange={handleChange} required />
        <input type="url" name="posterImage" placeholder="Poster Image URL" value={movie.posterImage} onChange={handleChange} required />
        <div className="button-group">
          <button type="submit">Add Movie</button>
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
