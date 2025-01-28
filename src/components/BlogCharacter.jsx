import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { CharactersContext } from "../App";
import { Link } from "react-router-dom";

export default function BlogCharacter() {
  const params = useParams();
  const url = `https://rickandmortyapi.com/api/character/${params.id}`;
  const { data, loading, error } = useFetch(url);
  const { charactersList } = useContext(CharactersContext);

  if (loading) return <p>Buscando en el multiverso...</p>;
  if (error) return <p>Este personaje ya no existe...: {error}</p>;

  return (
    <div className="card">
      <img
        src={charactersList[params.id].image}
        className="card-img-top"
        alt="..."
      >
        {" "}
      </img>
      <div className="card-body">
        <h5 className="card-title">{charactersList[params.id].name}</h5>
        <p className="card-text">{charactersList[params.id].species}</p>
        <Link to={`/Blog`} className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
}
