import '../styles/ComicsPage.css';
import spidermanImg from '../assets/spiderman.jpg';
import ironmanImg from '../assets/ironman.jpg';
import avengersImg from '../assets/avengers.jpg';
import blackpantherImg from '../assets/blackpanther.jpg';

const mockComics = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    thumbnail: spidermanImg,
    price: 3.99
  },
  {
    id: 2,
    title: "Iron Man: Extremis",
    thumbnail: ironmanImg,
    price: 4.99
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    thumbnail: avengersImg,
    price: 5.99
  },
  {
    id: 4,
    title: "Black Panther",
    thumbnail: blackpantherImg,
    price: 3.49
  }
];

export default function ComicsPage() {
  return (
    <div className="comics-page">
      <h1 className="comics-title">Comics</h1>
      <div className="comics-grid">
        {mockComics.map(comic => (
          <div key={comic.id} className="comic-card">
            <img 
              src={comic.thumbnail} 
              alt={comic.title} 
              className="comic-thumbnail"
            />
            <h3>{comic.title}</h3>
            <p>${comic.price.toFixed(2)}</p>
            <button className="add-to-favorites">
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}