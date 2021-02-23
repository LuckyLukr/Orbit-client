import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/HeaderComponent';
import Register from './Components/RegisterComponent';
import Footer from './Components/FooterComponent';

function App() {
  const [ astronauts, setAstronauts ] = useState([]);
  const [ showRegisterForm, setShowRegisterForm ] = useState(false);
  
  useEffect(()=> {
    loadAstronauts();
  },[]);

  function fetchAstronauts() {
      return new Promise( resolve => {
          axios.get('https://orbit-server.herokuapp.com/')
            .then( res => {
              resolve(res.data);
            })
            .catch(err => console.log(err));
      })
  }

  async function loadAstronauts() {
      const nauts = await fetchAstronauts();
      setAstronauts(nauts);
  }

  function addAstronaut(firstName, lastName, birth, superpower) {
      const newNaut = {id: uuidv4(), firstName, lastName, birth, superpower };
      axios.post('https://orbit-server.herokuapp.com/', newNaut).catch(err => console.log(err));
      setAstronauts([...astronauts, newNaut]);
  }

  function deleteAstronaut( id ) {
      axios.delete('https://orbit-server.herokuapp.com/' + id).catch(err => console.log(err));
      const nauts = [...astronauts];
      const index = nauts.findIndex(e => e.id === id);
      nauts.splice(index, 1);
      setAstronauts(nauts);
  }

  function expandRegisterForm() {
    setShowRegisterForm(!showRegisterForm)
  }

  return (
    <div className="App">
      <Header />
      <Register 
          astronauts={astronauts}
          onExpandRegisterForm={expandRegisterForm}
          onAdd={addAstronaut}
          onDelete={deleteAstronaut}
          showRegisterForm={showRegisterForm}
      />
      <Footer />
    </div>
  );
}

export default App;
