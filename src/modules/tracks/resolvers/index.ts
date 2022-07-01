import { Track } from '../../../models';

export const resolversTracks = {
  Query: {
    tracks: async (_: undefined, __: Record<string, never>, { dataSources }: any) => {
      return await dataSources.trackAPI.getTracks();
    },

    track: async (_: undefined, { id }: Record<string, never>, { dataSources }: any) => {
      return await dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    id: (parent: Track) => parent._id,
  },
};
