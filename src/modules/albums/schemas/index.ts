import { gql } from 'apollo-server';

export const typeAlbums = gql`
  type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    albums(limit: Int, offset: Int): [Album]
    album(id: ID!): Album
  }
`;
