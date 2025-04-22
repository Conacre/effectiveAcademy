import styles from '../styles/Footer.module.css';
import logo from '../assets/marvel-logo.svg';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-content']}>
        <img src={logo} alt="Marvel Logo" className={styles['footer-logo']} />
        <div className={styles['footer-text']}>
          <p>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</p>
          <a 
            href="https://developer.marvel.com" 
            target="_blank" 
            className={styles['footer-link']}
          >
            developer.marvel.com
          </a>
        </div>
      </div>
    </footer>
  );
}