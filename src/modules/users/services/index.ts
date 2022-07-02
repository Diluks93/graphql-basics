import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';
import { User } from '../../../models';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS || 'http://localhost:3004/v1/users';
  }

  async getUser(userId: string) {
    try {
      const data: User = await this.get(`/${userId}`);
      return data;
    } catch (err) {
      if (err) {
        process.stdout.write('Something went wrong');
      }
    }
  }

  async registerUser(userData: Omit<User, '_id'>) {
    try {
      const data: User = await this.post('/register', { ...userData });
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }

  async getJWT(email: string, password: string) {
    try {
      const data = await this.post('/login', { email, password });
      return data;
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
