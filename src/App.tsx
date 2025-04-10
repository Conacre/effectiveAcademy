import { BrowserRouter as Router, useRoutes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsPage from './pages/ComicsPage';
import FavoritesPage from './pages/FavoritesPage';

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
        { path: 'comics', element: <ComicsPage /> },
        { path: 'favorites', element: <FavoritesPage /> },
        { path: '/', element: <ComicsPage /> },
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