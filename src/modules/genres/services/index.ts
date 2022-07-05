import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { Genre, Data } from '../../../models';

export class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES || 'http://localhost:3001/v1/genres';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getGenres(limit = 5, offset = 0) {
    try {
      const data: Data<Genre> = await this.get('', {
        limit,
        offset,
      });
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async getGenre(genreId: string) {
    try {
      const data: Genre = await this.get(`/${genreId}`);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async createGenre(body: Genre | undefined) {
    try {
      const data = await this.post('', body);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async updateGenre(genreId: string, body: Genre | undefined) {
    try {
      return await this.put(`/${genreId}`, body);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async deleteGenre(genreId: string) {
    try {
      return await this.delete(`${encodeURIComponent(genreId)}`);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
