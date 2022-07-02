import { gql } from 'apollo-server';
import { GraphQLScalarType, Kind } from 'graphql';
import { resolversArtists, typeArtists } from './artists';
import { resolversBands, typeBands } from './bands';
import { typeGenres, resolversGenre } from './genres';
import { resolversTracks, typeTracks } from './tracks';
import { typeUsers, resolversUser } from './users';
import { typeFavourites } from './favourites';
import { typeAlbums, resolversAlbum } from './albums';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return (value as Date).getTime();
  },
  parseValue(value) {
    return new Date(value as Date);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(
        parseInt(ast.value, 10),
      );
    }
    return null;
  },
});

const dataResolver = {
  Date: dateScalar,
};

export const resolver = [
  resolversGenre,
  resolversAlbum,
  resolversArtists,
  resolversBands,
  resolversTracks,
  resolversUser,
  dataResolver,
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
