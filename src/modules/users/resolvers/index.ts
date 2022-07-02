import { User, Data } from '../../../models';

export const resolversUser = {
  Query: {
    user: async (_: undefined, { id }: User, { dataSources }: any) => {
      return await dataSources.userAPI.getUser(id);
    },
    jwt: async (_: undefined, { email, password }: User, { dataSources }: any) => {
      const data = await dataSources.userAPI.getJWT(email, password);
      return data;
    },
  },
  User: {
    id: (parent: User) => parent._id,
  },
  Mutation: {
    register: async (_: undefined, data: Data<User>, { dataSources }: any) => {
      return await dataSources.userAPI.registerUser(data);
    },
  },
};
