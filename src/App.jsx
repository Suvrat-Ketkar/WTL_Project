import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Doctors } from './pages/Doctors'
import { Login } from './pages/Login'
import { Contact } from './pages/Contact'
import { Myprofile } from './pages/Myprofile'
import { MyAppointment } from './pages/MyAppointment'
import { Appointment } from './pages/Appointment'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Footer } from './components/Footer'
import { SignUp } from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='nx-4 sm:mx-[10%]'> 
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors></Doctors>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/my-profile' element={<Myprofile></Myprofile>}></Route>
        <Route path='/my-appointments' element={<MyAppointment></MyAppointment>}></Route>
        <Route path='/appointment/:dId' element={<Appointment></Appointment>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
