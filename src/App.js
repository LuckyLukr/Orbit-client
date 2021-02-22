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
          axios.get('http://localhost:5000/')
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
      axios.post('http://localhost:5000/', newNaut);
      setAstronauts([...astronauts, newNaut]);
  }

  function deleteNaut( id ) {
      axios.delete('http://localhost:5000/' + id)
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
