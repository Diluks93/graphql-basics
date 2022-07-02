import { gql } from 'apollo-server';

export const typeAlbums = gql`
  input AlbumInput {
    name: String
    released: Int
    artists: [ArtistInput]
    bands: [BandInput]
    tracks: [TrackInput]
    genres: [GenreInput]
    image: String
  }

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

  extend type Query {
    albums(limit: Int, offset: Int): [Album]
    album(id: ID!): Album
  }

  extend type Mutation {
    createAlbum(name: String, released: Int, artist: [ArtistInput], bands: [BandInput], tracks: [TrackInput], genres: [GenreInput], image: String): Album
    updateAlbum(id: ID!, name: String, released: Int, artist: [ArtistInput], bands: [BandInput], tracks: [TrackInput], genres: [GenreInput], image: String): Album
    deleteAlbum(id: ID!): Delete
  }
`;
