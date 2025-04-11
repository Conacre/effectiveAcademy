import { BrowserRouter as Router, useRoutes, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsPage from './pages/ComicsPage';
import FavoritesPage from './pages/FavoritesPage';
import ComicDetailsPage from './pages/ComicDetailsPage';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/comics" replace /> },
        { path: 'comics', element: <ComicsPage /> },
        { path: 'comics/:id', element: <ComicDetailsPage /> },
        { path: 'favorites', element: <FavoritesPage /> },
      ],
    },
  ]);
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;