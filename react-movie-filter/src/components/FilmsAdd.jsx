import { useState } from 'react';

function FilmsAdd({ setList }) {
    const [newTitle, setNewTitle] = useState('');
    const [newGenre, setNewGenre] = useState('');
    function fileFilm() {
        const newFilm = { title: newTitle, genre: newGenre }
        setList(prevList => [...prevList, newFilm]);
        setNewTitle('');
        setNewGenre('');
    }

    return <>
        <form className="add-form" onSubmit={(e) => { e.preventDefault(); fileFilm() }}>
            <input name="title-input" value={newTitle} type="text" placeholder="Inserisci il titolo" onChange={e => setNewTitle(e.target.value)}></input>
            <input name="genre-input" value={newGenre} type="text" placeholder="Inserisci il genere" onChange={e => setNewGenre(e.target.value)}></input>
            <button type="submit">Invia</button>
        </form >
    </>
}

export default FilmsAdd