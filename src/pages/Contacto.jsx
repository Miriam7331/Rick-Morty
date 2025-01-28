import { StorageContext } from "../App";
import { useContext } from "react";

export default function Contacto() {
  const { storage, setStorage } = useContext(StorageContext);

  console.log(storage);

  return <div>Contacto</div>;
}
