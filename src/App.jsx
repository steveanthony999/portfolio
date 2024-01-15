import { useState } from 'react';
import './App.css';
import SocialBar from './components/SocialBar';
import SvgBackground from './components/SvgBackground';
import Info from './components/Info';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='main-container'>
      <SvgBackground />
      <div className='container'>
        <div className='left'>
          <div className='left-top'>
            <Info />
          </div>
          <div className='left-bottom'>left bottom</div>
        </div>
        <div className='right'>
          <div className='right-top'>
            <div
              id='menu'
              className={`btn3 ${isMenuOpen && 'open'}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <div className='icon'></div>
            </div>
          </div>
          <div className='right-center'>
            <SocialBar />
          </div>
          <div className='right-bottom'>
            <h1>
              Steven <br /> Woodward
            </h1>
            <br />
            <h4>S o f t w a r e &nbsp; E n g i n e e r</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
