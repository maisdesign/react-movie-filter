import { useState } from 'react';
import { films } from './data/films.js'
import FilmsList from './components/FilmsList.jsx'
import GenreSelector from './components/GenreSelector.jsx'

function App() {
  const [list, setList] = useState(films);
  //const [genres, setGenres] = useState(films.map((film) => film.genre));
  const [selectedGenre, setSelectedGenre] = useState('Tutti');
  const genres = films.map((film) => film.genre).filter((item, index, arr) => arr.indexOf(item) === index);
  const filteredList = selectedGenre === 'Tutti'
    ? list
    : list.filter(film => film.genre === selectedGenre)

  return (
    <>
      <h1>React Movie Filter</h1>
      <GenreSelector genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <FilmsList list={filteredList} />
    </>
  )
}

export default App
