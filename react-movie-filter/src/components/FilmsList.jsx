function FilmsList({ list }) {
    return <>
        <ul className="card">
            {list.map(film => <li key={film.title} className="film-single">
                <h3 className="film-title">{film.title}</h3>
                <p className="film-genre">{film.genre}</p>
            </li>
            )}
        </ul>
    </>
}
export default FilmsList