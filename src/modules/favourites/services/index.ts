import 'dotenv/config';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError } from 'apollo-server';

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES || 'http://localhost:3007/v1/favourites';
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set('Authorization', this.context.token);
  }

  async getFavourites() {
    try {
      return await this.get('');
    } catch (err) {
      if (err) {
        const message = (err as ApolloError).extensions.response.statusText;
        process.stdout.write(message);
      }
    }
  }
}
