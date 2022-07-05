import { Context } from 'apollo-server-core';
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { Data, DataSources } from '../../../models/data.models';
import {
  Album, Band, Genre, Track,
} from '../../../models';

export const resolversTracks = {
  Query: {
    async tracks(_parent: Track, { limit, offset }: Body & { limit: number, offset: number }, { dataSources }: Context<DataSources>) {
      return await dataSources.trackAPI.getTracks(limit, offset);
    },
    async track(_parent: Track, { id }: Body & { id: string }, { dataSources }: Context<DataSources>) {
      return await dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    id: (parent: Track) => parent._id,
    async album(parent: Track, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Album> | undefined = await dataSources.albumAPI.getAlbums();
      return data?.items.find((item) => parent.albumId === item._id);
    },
    async bands(parent: Track, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Band> | undefined = await dataSources.bandAPI.getBands();
      return data?.items.filter((item) => parent.bandsIds.includes(item._id));
    },
    async genres(parent: Track, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Genre> | undefined = await dataSources.genreAPI.getGenres();
      return data?.items.filter((item) => parent.genresIds.includes(item._id));
    },
  },
  Mutation: {
    createTrack: async (_parent: Track, body: Track, { dataSources }: Context<DataSources>) => {
      return await dataSources.trackAPI.createTrack(body);
    },
    updateTrack: async (_parent: Track, body: Track, { dataSources }: Context<DataSources>) => {
      return await dataSources.trackAPI.updateTrack(body.id as string, body);
    },
    deleteTrack: async (_parent: Track, { id }: Track, { dataSources }: Context<DataSources>) => {
      return await dataSources.trackAPI.deleteTrack(id as string);
    },
  },
};
