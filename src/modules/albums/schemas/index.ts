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

  "This Album type defines the queryable fields for every album in our data source."
  type Album {
    "This is unique ID for the album."
    id: ID!
    "this is the name of the album."
    name: String
    "this year of released."
    released: Int
    "This list of artists."
    artists: [Artist]
    "This list of bands."
    bands: [Band]
    "This list of tracks."
    tracks: [Track]
    "This list of genres."
    genres: [Genre]
    "This is album cover."
    image: String
  }

  extend type Query {
    "You can GET a list of albums."
    albums(limit: Int, offset: Int): [Album]
    "You can GET an album by ID."
    album(id: ID!): Album
  }

  extend type Mutation {
    "You can create a new album."
    createAlbum(name: String, released: Int, artist: [ArtistInput], bands: [BandInput], tracks: [TrackInput], genres: [GenreInput], image: String): Album
    "You can change a album by id ID in your database."
    updateAlbum(id: ID!, name: String, released: Int, artist: [ArtistInput], bands: [BandInput], tracks: [TrackInput], genres: [GenreInput], image: String): Album
    "You can remove a album by ID from your your database."
    deleteAlbum(id: ID!): Delete
  }
`;
