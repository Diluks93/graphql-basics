import {
  GenreAPI, AlbumAPI, ArtistAPI, BandsAPI, TrackAPI, UserAPI, FavouritesAPI,
} from '../modules';

export interface Data<T> {
  items: Array<T>;
  offset: number;
  limit: number;
  total: number;
}

export interface DataSources {
  dataSources: {
    genreAPI: GenreAPI,
    albumAPI: AlbumAPI,
    artistAPI: ArtistAPI,
    bandAPI: BandsAPI,
    trackAPI: TrackAPI,
    userAPI: UserAPI,
    favoritesAPI: FavouritesAPI
  }
}
