import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ComicDetailsPage.css';
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
    <div className="comic-details-page">
      <div className="comic-header">
        <img src={comic.thumbnail} alt={comic.title} className="comic-header-image" />
      </div>

      <div className="comic-body">
        <div className="comic-info">
          <h1>{comic.title}</h1>
          <p>{comic.description}</p>
        </div>
        
        <div className="comic-navigation">
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