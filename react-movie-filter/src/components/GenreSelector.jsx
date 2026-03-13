
function GenreSelector({ genres, selectedGenre, setSelectedGenre }) {
    return <>
        <label htmlFor="genreSelectId">
            Scegli un genere cinematografico
        </label>
        <select id="genreSelectId" className="form-select" name="selectGenre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="Tutti">Tutti</option>
            {
                genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
            }
        </select >
    </>
}

export default GenreSelector