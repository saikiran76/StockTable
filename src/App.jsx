import './App.css';
import Header from './components/Header';
import { NavBar } from './components/Navbar';
import News from './components/News';
import Chart from './components/Chart';
import Sector from './components/Sector';
import Overview from './components/Overview';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <>
      <div className='flex font-poppin h-screen'>
        <div className='w-[5%]'><NavBar /></div>
        <div className='w-[95%] flex flex-col'>
          <Header />
          <div className='flex w-full flex-1 mb-4'>
            <div className='w-[49.5%]'><News /></div>
            <div className='w-[50%] mr-5'><Sector color="bg-[#1E2D2D]" /></div>
          </div>
          <Provider store={store}>
          <div className="flex flex-1">
            <div className='flex-1 flex flex-col m-4 ml-16'>
              <p className='ml-2 mb-2 text-zinc-400 w-fit'>Markets</p>
              <div className='flex-1 flex flex-col bg-[#0F0F14] w-full'>
                <Overview />
              </div>
            </div>
            <div className='flex-1 flex flex-col mr-[4em]'>
              <div className='flex-1 flex flex-col bg-[#0F0F14] mt-11'>
                <Chart />
              </div>
            </div>
          </div>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
