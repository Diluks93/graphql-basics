import { Context } from 'apollo-server-core';
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { DataSources } from '../../../models/data.models';
import { Band, Data, Genre } from '../../../models';

export const resolversBands = {
  Query: {
    async bands(_parent: Band, { limit, offset }: Body & { limit: number, offset: number }, { dataSources }: Context<DataSources>) {
      return await dataSources.bandAPI.getBands(limit, offset);
    },
    async band(_parent: Band, { id }: Body & { id: string }, { dataSources }: Context<DataSources>) {
      return await dataSources.bandAPI.getBand(id);
    },
  },
  Band: {
    id: (parent: Band) => parent._id,
    async genres(parent: Band, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Genre> | undefined = await dataSources.genreAPI.getGenres();
      return data?.items.filter((item) => parent.genresIds.includes(item._id));
    },
  },
  Mutation: {
    createBand: async (_parent: Band, body: Band, { dataSources }: Context<DataSources>) => {
      return await dataSources.bandAPI.createBand(body);
    },
    updateBand: async (_parent: Band, body: Band, { dataSources }: Context<DataSources>) => {
      return await dataSources.bandAPI.updateBand(body.id as string, body);
    },
    deleteBand: async (_parent: Band, { id }: Band, { dataSources }: Context<DataSources>) => {
      return await dataSources.bandAPI.deleteBand(id as string);
    },
  },
};
