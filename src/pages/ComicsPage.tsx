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
  },
  {
    id: 5,
    title: "The Amazing Spider-Man",
    thumbnail: spidermanImg,
  },
  {
    id: 6,
    title: "Iron Man: Extremis",
    thumbnail: ironmanImg,
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    thumbnail: avengersImg,
  },
  {
    id: 8,
    title: "Black Panther",
    thumbnail: blackpantherImg,
  },
  {
    id: 9,
    title: "The Amazing Spider-Man",
    thumbnail: spidermanImg,
  },
  {
    id: 10,
    title: "Iron Man: Extremis",
    thumbnail: ironmanImg,
  },
];

const ITEMS_PER_PAGE = 6;

export default function ComicsPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFavorite = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
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
    <div className="comics-page">
      <h1 className="comics-title">Comics</h1>
      <div className="comics-grid">
        {currentComics.map(comic => (
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

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}