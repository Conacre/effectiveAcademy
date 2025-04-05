import '../styles/Header.css';
import logo from '../assets/marvel-logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <img 
        src={logo} 
        alt="Marvel Logo" 
        className="logo-left" 
      />
      <nav className="header-nav">
        <NavLink 
          to="/comics" 
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Comics
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};