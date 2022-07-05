import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { Context } from 'apollo-server-core';
import { Artist, Band, Data } from '../../../models';
import { DataSources } from '../../../models/data.models';

export const resolversArtists = {
  Query: {
    async artists(_parent: Artist, { limit, offset }: Body & { limit: number, offset: number }, { dataSources }: Context<DataSources>) {
      return await dataSources.artistAPI.getArtists(limit, offset);
    },
    async artist(_parent: Artist, { id }: Body & { id: string }, { dataSources }: Context<DataSources>) {
      return await dataSources.artistAPI.getArtist(id);
    },
  },
  Artist: {
    id: (parent: Artist) => parent._id,
    async bands(parent: Artist, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Band> = await dataSources.bandAPI.getBands();
      return data.items.filter((item) => parent.bandsIds.includes(item._id));
    },
  },
  Mutation: {
    createArtist: async (_parent: Artist, body: Artist, { dataSources }: Context<DataSources>) => {
      return await dataSources.artistAPI.createArtist(body);
    },
    updateArtist: async (_parent: Artist, body: Artist, { dataSources }: Context<DataSources>) => {
      return await dataSources.artistAPI.updateArtist(body.id as string, body);
    },
    deleteArtist: async (_parent: Artist, { id }: Artist, { dataSources }: Context<DataSources>) => {
      return await dataSources.artistAPI.deleteArtist(id as string);
    },
  },
};
