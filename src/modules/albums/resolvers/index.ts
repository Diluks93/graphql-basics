import { Album } from '../../../models';

export const resolversAlbum = {
  Query: {
    albums: async (_: undefined, __: Album, { dataSources }: any) => {
      return await dataSources.albumAPI.getAlbums();
    },

    album: async (_: undefined, { id }: Album, { dataSources }: any) => {
      return await dataSources.albumAPI.getAlbum(id);
    },
  },
  Album: {
    id: (parent: Album) => parent._id,
  },
  Mutation: {
    createAlbum: async (_: undefined, body: Album, { dataSources }: any) => {
      return await dataSources.albumAPI.createAlbum(body);
    },
    updateAlbum: async (_: undefined, body: Album, { dataSources }: any) => {
      return await dataSources.albumAPI.updateAlbum(body.id, body);
    },
    deleteAlbum: async (_: undefined, { id }: Album, { dataSources }: any) => {
      return await dataSources.albumAPI.deleteAlbum(id);
    },
  },
};
