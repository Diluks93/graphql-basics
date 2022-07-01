import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { User } from '../../../models';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS;
  }

  async getUser(userId: string) {
    try {
      const data: User = await this.get(`/${userId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
