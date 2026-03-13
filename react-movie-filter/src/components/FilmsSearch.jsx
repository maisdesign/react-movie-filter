function FilmsSearch({ setSearchQuery, searchQuery }) {
    return <>
        <input type="search" placeholder="Cerca un film" aria-label="Cerca un film" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
    </>
}
export default FilmsSearch