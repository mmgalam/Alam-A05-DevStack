import { Suspense } from 'react';
import './App.css'
import { Banner } from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { ExploreTech } from './Components/ExploreTec/ExploreTech';
import type { Itechnology } from './Type/Technologies';


const technologiesFetch = async():Promise<Itechnology[]> =>{
  const res = await fetch('/public/technologiesdata.json');
  const data = await res.json();
  return data;
}



function App() {

  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ExploreTech technologiesPromise={technologiesPromise}></ExploreTech>
      </Suspense>
    </>
  )
}

export default App
