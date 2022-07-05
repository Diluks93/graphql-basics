import { Context } from 'apollo-server-core';
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { DataSources } from '../../../models/data.models';
import { Genre } from '../../../models';

export const resolversGenre = {
  Query: {
    async genres(_parent: Genre, { limit, offset }: Body & { limit: number, offset: number }, { dataSources }: Context<DataSources>) {
      return await dataSources.genreAPI.getGenres(limit, offset);
    },
    async genre(_parent: Genre, { id }: Body & { id: string }, { dataSources }: Context<DataSources>) {
      return await dataSources.genreAPI.getGenre(id);
    },
  },
  Genre: {
    id: (parent: Genre) => parent._id,
  },
  Mutation: {
    createGenre: async (_parent: Genre, body: Genre, { dataSources }: Context<DataSources>) => {
      return await dataSources.genreAPI.createGenre(body);
    },
    updateGenre: async (_parent: Genre, body: Genre, { dataSources }: Context<DataSources>) => {
      return await dataSources.genreAPI.updateGenre(body.id as string, body);
    },
    deleteGenre: async (_parent: Genre, { id }: Genre, { dataSources }: Context<DataSources>) => {
      return await dataSources.genreAPI.deleteGenre(id as string);
    },
  },
};
