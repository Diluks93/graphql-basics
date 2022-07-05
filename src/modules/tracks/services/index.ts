import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { Data, Track } from '../../../models';

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS || 'http://localhost:3006/v1/tracks';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getTracks(limit = 5, offset = 0) {
    try {
      const data: Data<Track> = await this.get('', {
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

  async getTrack(trackId: string) {
    try {
      const data: Track = await this.get(`/${trackId}`);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async createTrack(body: Track | undefined) {
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

  async updateTrack(trackId: string, body: Track | undefined) {
    try {
      return await this.put(`/${trackId}`, body);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async deleteTrack(trackId: string) {
    try {
      return await this.delete(`${encodeURIComponent(trackId)}`);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
