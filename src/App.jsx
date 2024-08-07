import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPokemon from './components/AddPokemon';
import PokemonList from './components/PokemonList';
import AddPokemonToUser from './components/AddPokemonToUser';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div >
    <nav>
          <ul>
            <li>
              <Link to="/list-pokemon">List Pokemon</Link>
            </li>
            <li>
              <Link to="/add-pokemon">Add Pokemon User</Link>
            </li>
            <li>
              <Link to="/add-pokemon-to-user">Add Pokemon to User</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className='pikachu'>
          
      <div className="app">
      <img className='img' src="https://images.unsplash.com/photo-1668119064317-af122b3a0810?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
    
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list-pokemon" element={<PokemonList />} />
          <Route path="/add-pokemon" element={<AddPokemon />} />
          <Route path="/add-pokemon-to-user" element={<AddPokemonToUser />} />
          <Route path="/edit-pokemon/:ownerName" element={<AddPokemon />} />x
        </Routes>
        
      </div>
      </div>
    </Router>
  )
}

export default App