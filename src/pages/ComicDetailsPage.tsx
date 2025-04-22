import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/ComicDetailsPage.module.css';
import { mockComics } from '../data/mockComics';

export default function ComicDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const comicId = parseInt(id || '', 10);
  const comic = mockComics.find((comic) => comic.id === comicId);

  if (!comic) {
    return <div>Comic not found</div>;
  }

  const previousComic = mockComics.find((comic) => comic.id === comicId - 1);
  const nextComic = mockComics.find((comic) => comic.id === comicId + 1);

  return (
    <div className={styles['comic-details-page']}>
      <div className={styles['comic-header']}>
        <img src={comic.thumbnail} alt={comic.title} className={styles['comic-header-image']} />
      </div>

      <div className={styles['comic-body']}>
        <div className={styles['comic-info']}>
          <h1>{comic.title}</h1>
          <p>{comic.description}</p>
        </div>

        <div className={styles['comic-navigation']}>
          {previousComic && (
            <button onClick={() => navigate(`/comics/${previousComic.id}`)}>
              Previous: {previousComic.title}
            </button>
          )}
          {nextComic && (
            <button onClick={() => navigate(`/comics/${nextComic.id}`)}>
              Next: {nextComic.title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}