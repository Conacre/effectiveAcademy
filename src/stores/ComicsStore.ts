import { makeAutoObservable } from 'mobx';
import api from '../api/api';
import { toast } from 'react-toastify';

export interface Comic {
  id: number;
  title: string;
  description: string | null;
  thumbnail: {
    path: string;
    extension: string;
  };
}

class ComicsStore {
  comics: Comic[] = [];
  offset = 0;
  total = 0;
  pageSize = 20;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Преобразуем метод в стрелочную функцию
  loadComics = async (offset: number = 0) => {
    try {
      this.isLoading = true;
      this.error = null;
      const response = await api.get('/comics', { params: { offset, limit: this.pageSize } });
      const data = response.data.data;

      this.comics = data.results.map((comic: any) => ({
        id: comic.id,
        title: comic.title,
        description: comic.description,
        thumbnail: comic.thumbnail,
      }));
      this.total = data.total;
      this.offset = offset;
    } catch (e) {
      this.error = 'Ошибка загрузки комиксов';
      toast.error(this.error);
    } finally {
      this.isLoading = false;
    }
  };
}

export const comicsStore = new ComicsStore();