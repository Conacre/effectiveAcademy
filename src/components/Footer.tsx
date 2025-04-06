import '../styles/Footer.css';
import logo from '../assets/marvel-logo.svg';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <img src={logo} alt="Marvel Logo" className="footer-logo" />
        <div className="footer-text">
          <p>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</p>
          <a 
            href="https://developer.marvel.com" 
            target="_blank" 
            className="footer-link"
          >
            developer.marvel.com
          </a>
        </div>
      </div>
    </footer>
  );
};