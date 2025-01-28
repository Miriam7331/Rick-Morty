import { use, useState, useEffect, useContext } from "react";
import imagenRickMorty from "../img/rick-morty.png";
import Characters from "../components/Characters";
import { useFetch } from "../hooks/useFetch";
import { CharactersContext } from "../App";

export default function CharactersPage() {
  const { CharactersList, setCharactersList } = useContext(CharactersContext);

  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  //   useEffect(() => {
  //     setStorage(data);
  //     if (storage && storage.results) console.log(storage.results);
  //   }, [data]);

  useEffect(() => {
    if (data) {
      setCharactersList(data.results);
    }
  }, [data, setCharactersList]);

  return (
    <div className="App">
      <header className="App-header">
        {loading && (
          <>
            <h1 className="App-title">Rick & Morty</h1>
            <img src={imagenRickMorty} className="App-logo" alt="logo" />
          </>
        )}
        {charactersList && charactersList.results && (
          <Characters
            characters={charactersList}
            setCharacters={setCharactersList}
          ></Characters>
        )}
        {error && <h1>{error}</h1>}
      </header>
    </div>
  );
}
