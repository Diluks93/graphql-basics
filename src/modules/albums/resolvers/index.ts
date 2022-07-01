import { Album } from '../../../models';

export const resolversAlbum = {
  Query: {
    albums: async (_: undefined, __: Record<string, never>, { dataSources }: any) => {
      return await dataSources.albumAPI.getAlbums();
    },

    album: async (_: undefined, { id }: Record<string, never>, { dataSources }: any) => {
      return await dataSources.albumAPI.getAlbum(id);
    },
  },
  Album: {
    id: (parent: Album) => parent._id,
  },
};
