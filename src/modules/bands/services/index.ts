import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { Band } from '../../../models';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS || 'http://localhost:3003/v1/bands';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getBands(limit = 5, offset = 0) {
    try {
      return await this.get('', {
        limit,
        offset,
      });
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async getBand(bandId: string) {
    try {
      const data: Band = await this.get(`/${bandId}`);
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async createBand(body: Band | undefined) {
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

  async updateBand(bandId: string, body: Band | undefined) {
    try {
      return await this.put(`/${bandId}`, body);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async deleteBand(bandId: string) {
    try {
      return await this.delete(`${encodeURIComponent(bandId)}`);
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
