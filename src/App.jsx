import React, { useEffect, useState } from 'react';

import Bg from './assets/videos/eradogelo.mp4'
import './App.css';
import './responsive.css';
import Card from './Components/Card/Card';
import Home from './Components/Home/Home';
import SearchPerson from './Components/SearchPerson/SearchPerson';
import Footer from './Components/Footer/Footer';

function App() {
  const getFetch = 'https://api.disneyapi.dev/characters'
  const [searchTerm, setSearchTerm] = useState('')
  const [person, setPerson] = useState([])
  useEffect(() => {
    fetch(getFetch)
      .then(res => res.json())
      .then(data => setPerson(data.data, console.log(data)))
  }, [])
  


  return (
    <>
      <Home Bg={Bg}  />
      <SearchPerson setSearchTerm={setSearchTerm} />
      <Card person={person} setPerson={setPerson}  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Footer/>
    </>
  );
}

export default App;
