import { useState, useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Featured from './components/Featured';
import Header from './components/Header';
import Billboard from './components/Billboard';
import Ticket from './components/Ticket';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFilms = async () => {
      try {
        const res = await fetch('./src/utils/films.json');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log('Error: ', error);
      }
    }
    dataFilms();
  },[]);


  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Featured data={data}/>
          <Billboard data={data}/>
        </>
      }/>
      <Route path="/ticket" element={
        <>
          <Header />
          <Ticket />
        </>
      } />
    </Routes>
  )
}

export default App
