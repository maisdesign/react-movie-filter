import { useState, useEffect } from 'react';
import { films } from './data/films.js'
import FilmsList from './components/FilmsList.jsx'
import FilmsSelect from './components/FilmsSelect.jsx'

function App() {
  const [list, setList] = useState(films);
  const [genres, setGenres] = useState(films.map((film) => film.genre));
  const [selectedGenre, setSelectedGenre] = useState('Tutti');

  const filteredList = selectedGenre === 'Tutti'
    ? films
    : films.filter(film => film.genre === selectedGenre)

  return (
    <>
      <h1>React Movie Filter</h1>
      <FilmsSelect genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} list={list} setList={setList} />
      <FilmsList list={filteredList} />
    </>
  )
}

export default App
