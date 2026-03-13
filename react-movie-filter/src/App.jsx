import { useState } from 'react';
import { films } from './data/films.js'
import FilmsList from './components/FilmsList.jsx'
import GenreSelector from './components/GenreSelector.jsx'
import FilmsSearch from './components/FilmsSearch.jsx'
import FilmsAdd from './components/FilmsAdd.jsx'

function App() {
  const [list, setList] = useState(films);
  const [selectedGenre, setSelectedGenre] = useState('Tutti');
  const genres = list.map((film) => film.genre).filter((item, index, arr) => arr.indexOf(item) === index);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredList = list.filter(film => ((film.genre === selectedGenre || selectedGenre === 'Tutti') && film.title.toLowerCase().includes(searchQuery.toLowerCase())));


  return (
    <>
      <h1>React Movie Filter</h1>
      <div className="controls">
        <GenreSelector genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <FilmsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <FilmsList list={filteredList} />
      <FilmsAdd setList={setList} />
    </>
  )
}

export default App
