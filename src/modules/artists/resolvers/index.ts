import { Artist } from '../../../models';

export const resolversArtists = {
  Query: {
    artists: async (_: undefined, __: Artist, { dataSources }: any) => {
      return await dataSources.artistAPI.getArtists();
    },

    artist: async (_: undefined, { id }: Artist, { dataSources }: any) => {
      return await dataSources.artistAPI.getArtist(id);
    },
  },
  Artist: {
    id: (parent: Artist) => parent._id,
  },
  Mutation: {
    createArtist: async (_: undefined, body: Artist, { dataSources }: any) => {
      return await dataSources.artistAPI.createArtist(body);
    },
    updateArtist: async (_: undefined, body: Artist, { dataSources }: any) => {
      return await dataSources.artistAPI.updateArtist(body.id, body);
    },
    deleteArtist: async (_: undefined, { id }: Artist, { dataSources }: any) => {
      return await dataSources.artistAPI.deleteArtist(id);
    },
  },
};
