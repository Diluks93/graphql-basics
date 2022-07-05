import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { Context } from 'apollo-server-core';
import {
  Album, Artist, Band, Data, Genre, Track,
} from '../../../models';
import { DataSources } from '../../../models/data.models';

export const resolversAlbum = {
  Query: {
    async albums(_parent: Album, { limit, offset }: Body & { limit: number, offset: number}, { dataSources }: Context<DataSources>) {
      return await dataSources.albumAPI.getAlbums(limit, offset);
    },
    async album(_parent: Album, { id }: Body & { id: string}, { dataSources }: Context<DataSources>) {
      return await dataSources.albumAPI.getAlbum(id);
    },
  },
  Album: {
    id(parent: Album) {
      return parent._id;
    },
    async artists(parent: Album, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Artist> | undefined = await dataSources.artistAPI.getArtists();
      return data?.items.filter((item) => parent.artistsIds.includes(item._id));
    },
    async bands(parent: Album, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Band> | undefined = await dataSources.bandAPI.getBands();
      return data?.items.filter((item) => parent.bandsIds.includes(item._id));
    },
    async tracks(parent: Album, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Track> | undefined = await dataSources.trackAPI.getTracks();
      return data?.items.filter((item) => parent.trackIds.includes(item._id));
    },
    async genres(parent: Album, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Genre> | undefined = await dataSources.genreAPI.getGenres();
      return data?.items.filter((item) => parent.genresIds.includes(item._id));
    },
  },
  Mutation: {
    createAlbum: async (_parent: Album, body: Album, { dataSources }: Context<DataSources>) => {
      return await dataSources.albumAPI.createAlbum(body);
    },
    updateAlbum: async (_parent: Album, body: Album, { dataSources }: Context<DataSources>) => {
      return await dataSources.albumAPI.updateAlbum(body.id as string, body);
    },
    deleteAlbum: async (_parent: Album, { id }: Album, { dataSources }: Context<DataSources>) => {
      return await dataSources.albumAPI.deleteAlbum(id as string);
    },
  },
};
