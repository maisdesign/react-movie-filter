# React Movie Filter

Progetto React che implementa un sistema di filtro per una lista di film in base al genere.

## Obiettivo

Partendo da un array di film predefinito, costruire un'interfaccia che permetta all'utente di filtrare dinamicamente i film selezionando un genere da una `<select>`. La logica di filtraggio deve essere gestita tramite **stato** e **`useEffect`**.

## Dataset

```js
[
  { title: 'Inception',     genre: 'Fantascienza' },
  { title: 'Il Padrino',   genre: 'Thriller' },
  { title: 'Titanic',      genre: 'Romantico' },
  { title: 'Batman',       genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
```

## Requisiti

- Mostrare la lista completa dei film al caricamento
- Filtrare i film dinamicamente quando l'utente seleziona un genere
- Se nessun genere è selezionato, mostrare tutti i film
- Gestire il filtraggio con `useState` e `useEffect`

## Bonus

- **Ricerca per titolo** — campo di testo che filtra i film anche in base al titolo
- **Aggiunta film** — form per inserire nuovi film nella lista

## Avvio

```bash
npm install
npm run dev
```
