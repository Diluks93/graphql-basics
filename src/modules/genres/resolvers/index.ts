import { Genre } from '../../../models';

export const resolversGenre = {
  Query: {
    genres: async (_: undefined, __: Record<string, never>, { dataSources }: any) => {
      return await dataSources.genreAPI.getGenres();
    },

    genre: async (_: undefined, { id }: Record<string, never>, { dataSources }: any) => {
      return await dataSources.genreAPI.getGenre(id);
    },
  },
  Genre: {
    id: (parent: Genre) => parent._id,
  },
};
