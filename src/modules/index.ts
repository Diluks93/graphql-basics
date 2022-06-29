import { gql } from 'apollo-server';
import { typeArtists } from './artists';
import { typeBands } from './bands';
import { typeGenres } from './genres';
import { typeTracks } from './tracks';
import { typeUsers } from './users';
import { typeFavourites } from './favourites';
import { typeAlbums } from './albums';

export const schema = gql`
  ${typeArtists}
  ${typeBands}
  ${typeGenres}
  ${typeTracks}
  ${typeUsers}
  ${typeFavourites}
  ${typeAlbums}
`;
