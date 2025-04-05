import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsPage from './pages/ComicsPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/comics" element={<ComicsPage />} 
          />
          <Route path="/favorites" element={<FavoritesPage />} 
          />
          <Route path="/" element={<ComicsPage />} 
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;