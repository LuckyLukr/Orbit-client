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
      const naut = await fetchAstronauts();
      setAstronauts(naut);
  }

  function addNaut(firstName, lastName, birth, superpower) {
      const newNaut = {id: uuidv4(), firstName, lastName, birth, superpower };
      console.log(newNaut.id);
      axios.post('https://orbit-server.herokuapp.com/', newNaut);
      setAstronauts([...astronauts, newNaut]);
  }

  function deleteNaut( id ) {
      axios.delete('https://orbit-server.herokuapp.com/' + id)
      const newNauts = [...astronauts];
      const index = newNauts.findIndex(e => e.id === id);
      newNauts.splice(index, 1);
      setAstronauts(newNauts);
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
          onAdd={addNaut}
          onDelete={deleteNaut}
          showRegisterForm={showRegisterForm}
      />
      <Footer />
    </div>
  );
}

export default App;
