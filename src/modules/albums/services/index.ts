import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { Album, Data } from '../../../models';

export class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS || 'http://localhost:3002/v1/artists';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getAlbums(limit = 5, offset = 0) {
    try {
      const data: Data<Album> = await this.get('', {
        limit, offset,
      });
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async getAlbum(albumId: string) {
    try {
      const data: Album = await this.get(`/${albumId}`);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async createAlbum(body: Album | undefined) {
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

  async updateAlbum(albumId: string, body: Album | undefined) {
    try {
      return await this.put(`/${albumId}`, body);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async deleteAlbum(albumId: string) {
    try {
      return await this.delete(`${encodeURIComponent(albumId)}`);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
