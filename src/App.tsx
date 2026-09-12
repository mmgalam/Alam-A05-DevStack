import { Suspense } from 'react';
import './App.css'
import { Banner } from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { ExploreTech } from './Components/ExploreTec/ExploreTech';
import type { Itechnology } from './Type/Technologies';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';


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
      <Toaster position='bottom-right' toastOptions={{ style: {
            fontSize: "22px",
            padding: "16px 35px",
            minWidth: "300px"
          },
      }} />
      <Footer></Footer>
    </>
  )
}

export default App
