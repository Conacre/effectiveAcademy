import React, { useState } from 'react';
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
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

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
            
            <button
              className={`add-to-favorites ${favorites.includes(comic.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(comic.id)}
            >
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}