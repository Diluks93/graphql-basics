import { Band } from '../../../models';

export const resolversBands = {
  Query: {
    bands: async (_: undefined, __: Record<string, never>, { dataSources }: any) => {
      return await dataSources.bandAPI.getBands();
    },

    band: async (_: undefined, { id }: Record<string, never>, { dataSources }: any) => {
      return await dataSources.bandAPI.getBand(id);
    },
  },
  Band: {
    id: (parent: Band) => parent._id,
  },
};
