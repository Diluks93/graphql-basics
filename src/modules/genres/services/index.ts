import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { Genre, Data } from '../../../models';

export class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES;
  }

  async getGenres() {
    try {
      const data: Data<Genre> = await this.get('');
      return data.items;
    } catch (err) {
      console.error(err);
    }
  }

  async getGenre(genreId: string) {
    try {
      const data: Genre = await this.get(`/${genreId}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
