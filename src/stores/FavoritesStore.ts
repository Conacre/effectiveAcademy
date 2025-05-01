import { makeAutoObservable, reaction } from 'mobx';
import { Comic } from './ComicsStore';

class FavoritesStore {
  favorites: Comic[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();

    reaction(
      () => this.favorites,
      () => this.saveToLocalStorage()
    );
  }

  addFavorite(comic: Comic) {
    if (!this.favorites.find((fav) => fav.id === comic.id)) {
      this.favorites.push(comic);
    }
  }

  removeFavorite(id: number) {
    this.favorites = this.favorites.filter((comic) => comic.id !== id);
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('favorites');
    if (data) {
      this.favorites = JSON.parse(data);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

export const favoritesStore = new FavoritesStore();