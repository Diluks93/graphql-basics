import { gql } from 'apollo-server';
import { resolversArtists, typeArtists } from './artists';
import { resolversBands, typeBands } from './bands';
import { typeGenres, resolversGenre } from './genres';
import { resolversTracks, typeTracks } from './tracks';
import { typeUsers, resolversUser } from './users';
import { typeFavourites } from './favourites';
import { typeAlbums, resolversAlbum } from './albums';

export const resolver = [
  resolversGenre,
  resolversAlbum,
  resolversArtists,
  resolversBands,
  resolversTracks,
  resolversUser,
];

export const schema = gql`
  ${typeArtists}
  ${typeBands}
  ${typeGenres}
  ${typeTracks}
  ${typeUsers}
  ${typeFavourites}
  ${typeAlbums}
`;
export { GenreAPI } from './genres';
export { AlbumAPI } from './albums';
export { ArtistAPI } from './artists';
export { BandsAPI } from './bands';
export { TrackAPI } from './tracks';
export { UserAPI } from './users';
