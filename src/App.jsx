import { useState, useEffect } from 'react';
import './App.css'
import Featured from './components/Featured';
import Header from './components/Header';

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
    <>
      <Header />
      <Featured data={data}/>
    </>
  )
}

export default App
