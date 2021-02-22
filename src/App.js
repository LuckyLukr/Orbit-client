import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/HeaderComponent';
import Register from './Components/RegisterComponent';
import Footer from './Components/FooterComponent';

function App() {
  const [ astronauts, setAstronauts ] = useState([]);
  const [ addingData, setAddtingData ] = useState(false);
  
  useEffect(()=> {
    loadAstronauts();
  },[astronauts]);

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
      const newNaut = {id: astronauts.length, firstName, lastName, birth, superpower };
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

  function expandAdd() {
    const expand = addingData ? false : true;
    setAddtingData(expand)
  }

  return (
    <div className="App">
      <Header />
      <Register 
          astronauts={astronauts}
          onExpandAdd={expandAdd}
          onAdd={addNaut}
          onDelete={deleteNaut}
          addingData={addingData}
      />
      <Footer />
    </div>
  );
}

export default App;
