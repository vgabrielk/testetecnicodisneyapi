import React, { useEffect, useState } from 'react';

import Bg from './assets/videos/eradogelo.mp4'
import './App.css';
import './responsive.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SearchPerson from './Components/SearchPerson/SearchPerson';

function App() {
  const getFetch = 'https://api.disneyapi.dev/characters'
  const [searchTerm, setSearchTerm] = useState('')
  const [person, setPerson] = useState([])
  useEffect(() => {
    fetch(getFetch)
      .then(res => res.json())
      .then(data => setPerson(data.data, console.log(data)))
  }, [])

  const toPersons = () => {
    window.scrollTo(0, 500)
  }


  return (
    <>

      <Header />
      <Home Bg={Bg} toPersons={toPersons} />
      <SearchPerson setSearchTerm={setSearchTerm} />
      <Card person={person} setPerson={setPerson} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    </>
  );
}

export default App;
