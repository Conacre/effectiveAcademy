import styles from '../styles/ComicsPage.module.css';

interface ComicCardProps {
  id: number;
  title: string;
  thumbnail: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClick: () => void;
}

export default function ComicCard({
  id,
  title,
  thumbnail,
  isFavorite,
  onToggleFavorite,
  onClick,
}: ComicCardProps) {
  return (
    <div className={styles['comic-card']} onClick={onClick}>
      <img src={thumbnail} alt={title} className={styles['comic-thumbnail']} />
      <h3>{title}</h3>
      <button
        className={`${styles['add-to-favorites']} ${
          isFavorite ? styles['active'] : ''
        }`}
        onClick={(e) => {
          e.stopPropagation(); // Останавливаем всплытие события клика
          onToggleFavorite(id);
        }}
      ></button>
    </div>
  );
}