import { gql } from 'apollo-server';

export const typeGenres = gql`
  "This Genres type is supported to fields for parameters."
  type Genres {
    items: [Genre!]
  }
  
  "This Genre type defines the queryable fields for every genre in our data source."
  type Genre {
    "This is unique ID for the genre."
    id: ID!
    "This is the name of the genre."
    name: String
    "This is description of the genre."
    description: String
    "This is the name country where was released genre."
    country: String
    "This is the released year."
    year: Int
  }

  extend type Query {
    "You can GET a list of genre."
    genres(offset: Int, limit: Int): Genres
    "You can GET genre by ID."
    genre(id: ID!): Genre
  }

  extend type Mutation {
    "You can create a new genre. Attention! name is required field."
    createGenre(name: String!, description: String, country: String, year: Int): Genre
    "You can update your genre by ID in your database."
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
    "You can remove your genre by ID from your database."
    deleteGenre(id: ID!): Delete
  }
`;
