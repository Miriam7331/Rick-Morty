import "./App.css";

import { Routes, Route } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import Layout from "./layouts/Layout";
import Personaje from "./pages/Personaje";

import Blog from "./pages/Blog";
import { useContext, createContext, useState } from "react";
import BlogCharacter from "./pages/Blog";
import Navbar from "./components/Navbar";

export const CharactersContext = createContext();

function App() {
  const [charactersList, setCharactersList] = useState([null]);

  return (
    <>
      <CharactersContext.Provider value={{ charactersList, setCharactersList }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Blog />} path="/Blog"></Route>
            <Route element={<BlogCharacter />} path="/blog/:id"></Route>

            <Route path="/" element={<CharactersPage />} />
            <Route path="/Personaje/:id" element={<Personaje />} />
          </Route>
        </Routes>
      </CharactersContext.Provider>
    </>
  );
}

export default App;
