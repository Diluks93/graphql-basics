import { Genre } from '../../../models';

export const resolversGenre = {
  Query: {
    genres: async (_: undefined, __: Genre, { dataSources }: any) => {
      return await dataSources.genreAPI.getGenres();
    },

    genre: async (_: undefined, { id }: Genre, { dataSources }: any) => {
      return await dataSources.genreAPI.getGenre(id);
    },
  },
  Genre: {
    id: (parent: Genre) => parent._id,
  },
  Mutation: {
    createGenre: async (_: undefined, body: Genre, { dataSources }: any) => {
      return await dataSources.genreAPI.createGenre(body);
    },
    updateGenre: async (_: undefined, body: Genre, { dataSources }: any) => {
      return await dataSources.genreAPI.updateGenre(body.id, body);
    },
    deleteGenre: async (_: undefined, { id }: Genre, { dataSources }: any) => {
      return await dataSources.genreAPI.deleteGenre(id);
    },
  },
};
