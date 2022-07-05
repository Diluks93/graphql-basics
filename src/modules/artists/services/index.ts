import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { Artist, Data } from '../../../models';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS || 'http://localhost:3002/v1/artists';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getArtists(limit = 5, offset = 0) {
    try {
      const data: Data<Artist> = await this.get('', {
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

  async getArtist(artistId: string) {
    try {
      const data: Artist = await this.get(`/${artistId}`);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async createArtist(body: Artist | undefined) {
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

  async updateArtist(artistId: string, body: Artist | undefined) {
    try {
      return await this.put(`/${artistId}`, body);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async deleteArtist(artistId: string) {
    try {
      return await this.delete(`${encodeURIComponent(artistId)}`);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
