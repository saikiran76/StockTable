import './App.css'
import Header from './components/Header'
import { NavBar } from './components/Navbar'
import News from './components/News'
import Chart from './components/Chart'
import Sector from './components/Sector'

function App() {
  return (
    <>
    <div className='flex'>
      <div className='w-[5%]'><NavBar/></div>
      <div className='w-[95%]'>
        <Header/>
        <div className='flex w-[100%]'>
        <div className='w-[42.5%]'><News/></div>
        <div className='w-[53%]'><Sector color="bg-[#1E2D2D]" /></div>
        
        </div>
        <div className='w-[55%]'><Chart/></div>
      </div>
    </div>
    </>
  )
}

export default App
