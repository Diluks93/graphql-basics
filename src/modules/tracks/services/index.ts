import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { Data, Track } from '../../../models';

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS;
  }

  async getTracks() {
    try {
      const data: Data<Track> = await this.get('');
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async getTrack(trackId: string) {
    try {
      const data: Track = await this.get(`/${trackId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
