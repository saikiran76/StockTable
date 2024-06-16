import './App.css'
import Header from './components/Header'
import { NavBar } from './components/Navbar'
import News from './components/News'
import Chart from './components/Chart'
import Sector from './components/Sector'
import Overview from './components/Overview'

function App() {
  return (
    <>
    <div className='flex font-poppin'>
      <div className='w-[5%]'><NavBar/></div>
      <div className='w-[95%]'>
        <Header/>
        <div className='flex w-[100%]'>
          <div className='w-[44.5%]'><News/></div>
          {/* <div className='w-[53%]'><Sector color="bg-[#1E2D2D]" /></div> */}
        
        </div>
        {/* <div className='w-[55%]'><Chart/></div> */}
        <p className='ml-16 mb-2 text-zinc-400'>Markets</p>
        <div className='w-[38%] m-4 ml-16'><Overview/></div>
      </div>
    </div>
    </>
  )
}

export default App
