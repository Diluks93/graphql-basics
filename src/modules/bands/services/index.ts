import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { Band, Data } from '../../../models';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS;
  }

  async getBands() {
    try {
      const data: Data<Band> = await this.get('');
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async getBand(bandId: string) {
    try {
      const data: Band = await this.get(`/${bandId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
