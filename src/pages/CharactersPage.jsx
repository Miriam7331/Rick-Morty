import { use, useState, useEffect, useContext } from 'react';
import imagenRickMorty from '../img/rick-morty.png';
import Characters from '../components/Characters';
import { useFetch } from '../hooks/useFetch';
import { StorageContext } from '../App';

export default function CharactersPage() {    
 
     const {storage, setStorage} = useContext(StorageContext);
     
     const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
 
     useEffect(() => {
         setStorage(data);
           if(storage && storage.results) console.log(storage.results)
     }, [data]);

    return (
        <div className="App">
            <header className="App-header">
                {loading &&
                    <>
                        <h1 className="App-title">Rick & Morty</h1>
                        <img src={imagenRickMorty} className="App-logo" alt="logo" />
                    </>}
                {storage && storage.results && (
                    <Characters characters={storage} setCharacters={storage}></Characters>
                )}
                {error && <h1>{error}</h1>}
            </header>
        </div>
    );
}
