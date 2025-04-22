import styles from '../styles/Header.module.css';
import logo from '../assets/marvel-logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles['header']}>
      <img src={logo} alt="Marvel Logo" className={styles['logo-left']} />
      <nav className={styles['header-nav']}>
        <NavLink
          to="/comics"
          className={({ isActive }) =>
            isActive && location.pathname === '/comics' ? `${styles['nav-button']} ${styles['active']}` : styles['nav-button']
          }
        >
          Comics
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? `${styles['nav-button']} ${styles['active']}` : styles['nav-button'])}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};