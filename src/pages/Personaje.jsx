import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CharactersContext } from "../App";

export default function Personaje() {
  const { id } = useParams();
  const { storage: charactersList } = useContext(CharactersContext);

  const currentIndex = charactersList.results.findIndex(
    (character) => character.id.toString() === id
  );

  const previousCharacter =
    currentIndex > 0 ? charactersList.results[currentIndex - 1] : null;

  return (
    <div className="card">
      <img
        src={charactersList.results[currentIndex].image}
        className="card-img-top"
        alt={charactersList.results[currentIndex].name}
      />
      <div className="card-body">
        <h5 className="card-title">
          {charactersList.results[currentIndex].name}
        </h5>
        <p className="card-text">
          {charactersList.results[currentIndex].species}
        </p>

        {previousCharacter && (
          <Link
            to={`/personaje/${previousCharacter.id}`}
            className="btn btn-outline-primary"
          >
            Ver Personaje Anterior
          </Link>
        )}

        <Link to={`/`} className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
}
