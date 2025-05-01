import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { comicsStore } from '../stores/ComicsStore';
import { favoritesStore } from '../stores/FavoritesStore';
import styles from '../styles/ComicsPage.module.css';

const ComicsPage = observer(() => {
  const { comics, total, offset, pageSize, loadComics, isLoading } = comicsStore;
  const { favorites, addFavorite, removeFavorite } = favoritesStore;

  useEffect(() => {
    loadComics();
  }, []);

  const handlePageChange = (page: number) => {
    loadComics((page - 1) * pageSize);
  };

  const isFavorite = (comicId: number) => favorites.some((comic) => comic.id === comicId);

  const toggleFavorite = (comic: any) => {
    if (isFavorite(comic.id)) {
      removeFavorite(comic.id);
    } else {
      addFavorite(comic);
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className={styles['comics-page']}>
      <h1 className={styles['comics-title']}>Marvel Comics</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles['comics-grid']}>
          {comics.map((comic) => (
            <div key={comic.id} className={styles['comic-card']}>
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
                onClick={() => toggleFavorite(comic)}
              >
                {isFavorite(comic.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          ))}
        </div>
      )}
      <div className={styles['pagination']}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${styles['pagination-button']} ${
              offset / pageSize + 1 === index + 1 ? styles['active'] : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
});

export default ComicsPage;