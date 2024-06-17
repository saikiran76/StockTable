import '../App.css';
import Header from '../components/Header';
import { NavBar } from '../components/Navbar';
import News from '../components/News';
import Chart from '../components/Chart';
import Sector from '../components/Sector';
import Overview from '../components/Overview';
import { Provider } from 'react-redux';
import store from '../utils/store';
import { useState } from 'react';
import Profile from '../components/Profile';

function App() {
  const [visible, setVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleBar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="flex font-poppin min-h-screen">
        {visible && (
          <div className="w-2/12 md:w-1/6 lg:w-1/12 transition-all duration-500 ease-in-out">
            <NavBar onUserIconClick={() => setShowProfile(true)} />
          </div>
        )}
        <div className="w-1/12 md:w-1/6 lg:w-1/12 hidden md:block">
          <NavBar onUserIconClick={() => setShowProfile(true)} />
        </div>
        <div className={`${visible ? "w-10/12" : "w-11/12"} md:w-5/6 lg:w-11/12 flex flex-col`}>
          <Header />
          <div className="flex flex-col md:flex-row w-full flex-1 mb-4">
            <div className="w-full md:w-1/2"><News /></div>
            <div className="w-full md:w-1/2 md:mr-5">
              {/* <Sector color="bg-[#1E2D2D]" /> */}
            </div>
          </div>
          <Provider store={store}>
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex-1 flex flex-col m-4 ml-0 md:ml-16">
                <p className="ml-6 md:ml-2 mb-1 md:mb-2 text-zinc-400 w-fit">Markets</p>
                <div className="flex-1 flex flex-col bg-[#0F0F14] w-full">
                  {/* <Overview /> */}
                </div>
              </div>
              <div className="flex-1 flex flex-col mr-0 md:mr-[4em] ml-4 md:ml-0">
                <div className="flex-1 flex flex-col bg-[#0F0F14] mt-11">
                  {/* <Chart /> */}
                </div>
              </div>
            </div>
          </Provider>
        </div>
      </div>
      {showProfile && <Profile onClose={() => setShowProfile(false)} />}
      <button
        className="fixed top-[5em] left-4 border-gray-600 hover:bg-blue-600 duration-200 ease-linear text-white p-2 rounded-full md:hidden"
        onClick={toggleBar}
      >
        {visible ? 'X' : 'Menu'}
      </button>
    </>
  );
}

export default App;
