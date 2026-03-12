function FilmsFilter({ list, setList, selectedGenre }) {
    { setList(list.filter((film) => film.genre === selectedGenre)) }
    return <>
    </>
}

export default FilmsFilter