import { useState } from 'react';
import SocialBar from './components/SocialBar';
import Info from './components/Info';
import ProjectsMenu from './components/ProjectsMenu';
import Me from './components/Me';
import Doggy from './components/Doggy';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='main-container'>
      <Doggy />
      <div className='container'>
        <div className='left'>
          <div className='left-top'>
            <Info />
          </div>
          <div className='left-bottom'>
            <ProjectsMenu />
          </div>
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
            <Me />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
