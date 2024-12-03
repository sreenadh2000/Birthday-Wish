
import * as React from 'react';
import Balloons from './components/HomePage/BaloonsFloat';
import EnvelopLetter from './components/Envelop/EnvelopLetter';
import GalleryView from './components/Gallery/GalleryView';
import NavBar from './components/Header/NavBar';



function App() {
  return (
    <>
    <div id='Home' className='container-fluid p-0 m-0'>
    <NavBar />
    <div  className=''>
    <Balloons />
    </div>
    <div id='Gallery'>
    <GalleryView />
    </div>
    <div id='Envelop' className='my-5'>
    <EnvelopLetter />
    </div>
    <footer>
  <p className='pt-3'>copywrites by @2024</p>
</footer>
    </div>
    </>
  )
}

export default App;
