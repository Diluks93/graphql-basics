import { Context } from 'apollo-server-core';
import { User } from '../../../models';
import { DataSources } from '../../../models/data.models';

export const resolversUser = {
  Query: {
    user: async (_parent: undefined, { id }: User, { dataSources }: Context<DataSources>) => {
      return await dataSources.userAPI.getUser(id as string);
    },
    jwt: async (_parent: undefined, { email, password }: User, { dataSources }: Context<DataSources>) => {
      const data = await dataSources.userAPI.getJWT(email, password);
      return data;
    },
  },
  User: {
    id: (parent: User) => parent._id,
  },
  Mutation: {
    register: async (_parent: undefined, data: unknown, { dataSources }: Context<DataSources>) => {
      return await dataSources.userAPI.registerUser(data as Omit<User, '_id'>);
    },
  },
};
