import './App.css'
import Header from './components/Header'
import { NavBar } from './components/Navbar'
import News from './components/News'

function App() {
  return (
    <>
    <div className='flex'>
      <div className='w-[5%]'><NavBar/></div>
      <div className='w-[95%]'>
        <Header/>
        <News/>
      </div>
    </div>
    </>
  )
}

export default App
