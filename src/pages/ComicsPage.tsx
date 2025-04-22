import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ComicsPage.module.css';
import { mockComics } from '../data/mockComics';

const ITEMS_PER_PAGE = 6;

export default function ComicsPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const totalPages = Math.ceil(mockComics.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentComics = mockComics.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles['comics-page']}>
      <h1 className={styles['comics-title']}>Comics</h1>
      <div className={styles['comics-grid']}>
        {currentComics.map((comic) => (
          <div
            key={comic.id}
            className={styles['comic-card']}
            onClick={() => navigate(`/comics/${comic.id}`)}
          >
            <img
              src={comic.thumbnail}
              alt={comic.title}
              className={styles['comic-thumbnail']}
            />
            <h3>{comic.title}</h3>
            <button
              className={`${styles['add-to-favorites']} ${
                favorites.includes(comic.id) ? styles['active'] : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(comic.id);
              }}
            ></button>
          </div>
        ))}
      </div>

      <div className={styles['pagination']}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${styles['pagination-button']} ${
              currentPage === index + 1 ? styles['active'] : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}