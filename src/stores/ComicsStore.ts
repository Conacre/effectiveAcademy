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
  pageSize = 18; // Устанавливаем 12 комиксов на страницу
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadComics = async (offset: number = 0) => {
    try {
      // Ограничиваем offset, чтобы не загружать больше 1500 комиксов
      if (offset >= 1500) {
        toast.error('Достигнут лимит отображаемых комиксов (1500)');
        return;
      }

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
      this.total = Math.min(data.total, 1500); // Устанавливаем общее количество как максимум 1500
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