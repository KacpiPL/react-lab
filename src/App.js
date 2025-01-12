import { useState } from "react";
import "milligram";

function App() {
  const [title, setTitle] = useState('Wall-E')
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState('');

  let message;
  if (title.length < 5) {
      message = "Tutuł jest za krótki. Nagrywają takie filmy?";
  } else if (title.length < 15) {
      message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
  } else {
      message = "Tytuł jest za długi, nikt tego nie zapamięta.";
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function addMovie() {
    if (title.length < 5) {
      alert("The title is too short. Please provide a title with at least 5 characters.");
      return;
    }

    if (!year) {
      alert("Please provide a valid year.");
      return;
    }

    // Add both title and year to the movies list
    setMovies([...movies, { title, year }]);
    setTitle('');
    setYear('');
  }

  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>Titles</h2>
      <ul>
          {movies.map((movie, index) => <li key={index}>{movie.title} ({movie.year})</li>)}
      </ul>
      <h2>Add movie</h2>
      <b>Title</b>
      <input type="text" value={title} onChange={handleChange}/>
      {title.length > 0 && <div>{message}</div>}
      <b>Rok nagrania</b>
      <input type="text" value={year} onChange={handleYearChange}/>

      <button onClick={addMovie}>
          Add movie
      </button>
    </div>
  )
}

export default App;
