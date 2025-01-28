import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StorageContext } from "../App";

export default function Personaje() {
  const { id } = useParams();
  const { storage } = useContext(StorageContext);

  const currentIndex = storage.results.findIndex(
    (character) => character.id.toString() === id
  );

  const previousCharacter =
    currentIndex > 0 ? storage.results[currentIndex - 1] : null;

  return (
    <div className="card">
      <img
        src={storage.results[currentIndex].image}
        className="card-img-top"
        alt={storage.results[currentIndex].name}
      />
      <div className="card-body">
        <h5 className="card-title">{storage.results[currentIndex].name}</h5>
        <p className="card-text">{storage.results[currentIndex].species}</p>

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
