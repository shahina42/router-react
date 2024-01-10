import './App.css'
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Kalvium from './components/Kalvium.jsx'
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <nav>
        <Link to="/"><h3 className='home'>Kalvium ❤️</h3></Link>
        <div className='right'>
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/contacts"><h3>Contacts</h3></Link>
        </div>
      </nav>

      <hr />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Kalvium />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </>

  )
}

export default App