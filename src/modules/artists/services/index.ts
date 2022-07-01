import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { Artist, Data } from '../../../models';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS;
  }

  async getArtists() {
    try {
      const data: Data<Artist> = await this.get('');
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async getArtist(artistId: string) {
    try {
      const data: Artist = await this.get(`/${artistId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
