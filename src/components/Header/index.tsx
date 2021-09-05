import React from 'react';
import { Link } from 'react-router-dom';

import { AboutUsIcon, ContactIcon, Container, DarkModeIcon, HomeIcon } from "./styles";

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <header>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <HomeIcon className='menu-icon' />
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <ContactIcon className='menu-icon' />
                <span className="link-text">Contact</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                <AboutUsIcon className='menu-icon' />
                <span className="link-text">About Us</span>
              </Link>
            </li>
            <li onClick={toggleTheme} className="nav-item nav-link" id="dark-mode">
              <DarkModeIcon className='menu-icon' />
              <span className="link-text">Dark Mode</span>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
