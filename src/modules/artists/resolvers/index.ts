import { Artist } from '../../../models';

export const resolversArtists = {
  Query: {
    artists: async (_: undefined, __: Record<string, never>, { dataSources }: any) => {
      return await dataSources.artistAPI.getArtists();
    },

    artist: async (_: undefined, { id }: Record<string, never>, { dataSources }: any) => {
      return await dataSources.artistAPI.getArtist(id);
    },
  },
  Artist: {
    id: (parent: Artist) => parent._id,
  },
};
