import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { comicsStore } from '../stores/ComicsStore';
import { favoritesStore } from '../stores/FavoritesStore';
import styles from '../styles/ComicsPage.module.css';

const ComicsPage = observer(() => {
  const { comics, total, offset, pageSize, loadComics, isLoading } = comicsStore;
  const { favorites, addFavorite, removeFavorite } = favoritesStore;

  useEffect(() => {
    loadComics();
  }, []);

  const totalPages = Math.ceil(total / pageSize);
  const currentPage = Math.floor(offset / pageSize) + 1;
  const visiblePages = 6; // Количество отображаемых страниц
  const [paginationStart, setPaginationStart] = useState(1);

  const handlePageChange = (page: number) => {
    loadComics((page - 1) * pageSize);
  };

  const handleNextPagination = () => {
    if (paginationStart + visiblePages <= totalPages) {
      setPaginationStart(paginationStart + visiblePages);
    }
  };

  const handlePreviousPagination = () => {
    if (paginationStart - visiblePages > 0) {
      setPaginationStart(paginationStart - visiblePages);
    }
  };

  const isFavorite = (comicId: number) => favorites.some((comic) => comic.id === comicId);

  const toggleFavorite = (comic: any) => {
    if (isFavorite(comic.id)) {
      removeFavorite(comic.id);
    } else {
      addFavorite(comic);
    }
  };

  return (
    <div className={styles['comics-page']}>
      <h1 className={styles['comics-title']}>
        Comics ({total})
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles['comics-grid']}>
          {comics.map((comic) => (
            <div
              key={comic.id}
              className={styles['comic-card']}
              onClick={() => window.location.href = `/comics/${comic.id}`}
            >
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                className={styles['comic-thumbnail']}
              />
              <h3>{comic.title}</h3>
              <button
                className={`${styles['add-to-favorites']} ${
                  isFavorite(comic.id) ? styles['active'] : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(comic);
                }}
              >
                {isFavorite(comic.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          ))}
        </div>
      )}
      <div className={styles['pagination']}>
        {paginationStart > 1 && (
          <>
            <button
              className={styles['pagination-button']}
              onClick={handlePreviousPagination}
            >
              &laquo;
            </button>
            <span className={styles['pagination-dots']}>...</span>
          </>
        )}
        {Array.from({ length: Math.min(visiblePages, totalPages - paginationStart + 1) }, (_, index) => {
          const page = paginationStart + index;
          return (
            <button
              key={page}
              className={`${styles['pagination-button']} ${
                currentPage === page ? styles['active'] : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
        {paginationStart + visiblePages <= totalPages && (
          <>
            <span className={styles['pagination-dots']}>...</span>
            <button
              className={styles['pagination-button']}
              onClick={handleNextPagination}
            >
              &raquo;
            </button>
          </>
        )}
      </div>
    </div>
  );
});

export default ComicsPage;