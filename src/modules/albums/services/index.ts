import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { Album, Data } from '../../../models';

export class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS;
  }

  async getAlbums() {
    try {
      const data: Data<Album> = await this.get('');
      return data.items;
    } catch (err) {
      console.error(err);
    }
  }

  async getAlbum(albumId: string) {
    try {
      const data: Album = await this.get(`/${albumId}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
