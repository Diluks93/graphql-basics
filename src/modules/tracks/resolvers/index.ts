import { Track } from '../../../models';

export const resolversTracks = {
  Query: {
    tracks: async (_: undefined, __: Track, { dataSources }: any) => {
      return await dataSources.trackAPI.getTracks();
    },

    track: async (_: undefined, { id }: Track, { dataSources }: any) => {
      return await dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    id: (parent: Track) => parent._id,
  },
  Mutation: {
    createTrack: async (_: undefined, body: Track, { dataSources }: any) => {
      return await dataSources.trackAPI.createTrack(body);
    },
    updateTrack: async (_: undefined, body: Track, { dataSources }: any) => {
      return await dataSources.trackAPI.updateTrack(body.id, body);
    },
    deleteTrack: async (_: undefined, { id }: Track, { dataSources }: any) => {
      return await dataSources.trackAPI.deleteTrack(id);
    },
  },
};
