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
  },
  {
    id: 2,
    title: "Iron Man: Extremis",
    thumbnail: ironmanImg,
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    thumbnail: avengersImg,
  },
  {
    id: 4,
    title: "Black Panther",
    thumbnail: blackpantherImg,
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
            
            <button className="add-to-favorites">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}