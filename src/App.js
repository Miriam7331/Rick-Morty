import './App.css';

import { Routes, Route } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import Layout from './layouts/layout';
import Personaje from './pages/Personaje';
import { useContext, createContext , useState} from 'react';
import BlogCharacter from './pages/BlogCharacter';
export const StorageContext = createContext();

function App() {

  const [storage, setStorage] = useState(StorageContext);

  return (

    <StorageContext.Provider value={{storage, setStorage}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/Personaje/:id" element={<Personaje />} />
          <Route path="/BlogCharacters" element={<BlogCharacter />} />
        </Route>
      </Routes>
    </StorageContext.Provider>
  );
}

export default App;
