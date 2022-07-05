import { Context } from 'apollo-server-core';
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';
import { Data, DataSources } from '../../../models/data.models';
import {
  Artist, Band, Favorite, Genre, Track,
} from '../../../models';

export const resolversFavorites = {
  Query: {
    async favourites(_parent: Favorite, _body: Body, context: Context<DataSources>) {
      return await context.dataSources.favoritesAPI.getFavourites();
    },
  },
  Favourites: {
    id: (parent: Favorite) => parent._id,
    async bands(parent: Favorite, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Band> | undefined = await dataSources.bandAPI.getBands();
      return data?.items.filter((item) => parent.bandsIds.includes(item._id));
    },
    async genres(parent: Favorite, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Genre> | undefined = await dataSources.genreAPI.getGenres();
      return data?.items.filter((item) => parent.genresIds.includes(item._id));
    },
    async artists(parent: Favorite, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Artist> | undefined = await dataSources.artistAPI.getArtists();
      return data?.items.filter((item) => parent.artistsIds.includes(item._id));
    },
    async tracks(parent:Favorite, _body: Body, { dataSources }: Context<DataSources>) {
      const data: Data<Track> | undefined = await dataSources.trackAPI.getTracks();
      return data?.items.filter((item) => parent.tracksIds.includes(item._id));
    },
  },
};
