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
  Mutation: {
    createBand: async (_: undefined, body: Band, { dataSources }: any) => {
      return await dataSources.bandAPI.createBand(body);
    },
    updateBand: async (_: undefined, body: Band, { dataSources }: any) => {
      return await dataSources.bandAPI.updateBand(body.id, body);
    },
    deleteBand: async (_: undefined, { id }: Band, { dataSources }: any) => {
      return await dataSources.bandAPI.deleteBand(id);
    },
  },
};
