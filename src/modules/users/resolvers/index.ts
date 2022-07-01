import { User } from '../../../models';

export const resolversUser = {
  Query: {
    user: async (_: undefined, { id }: any, { dataSources }: any) => {
      return await dataSources.userAPI.getUser(id);
    },
  },
  User: {
    id: (parent: User) => parent._id,
  },
};
