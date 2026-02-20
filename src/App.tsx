import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Sign from './pages/Sign'

import Header from './components/Header'
import Footer from './components/Footer'

import './style.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/sign' element={<Sign/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
