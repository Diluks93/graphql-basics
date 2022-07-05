import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { EOL } from 'node:os';

import {
  resolver, schema, GenreAPI, AlbumAPI, ArtistAPI, BandsAPI, TrackAPI, UserAPI, FavouritesAPI,
} from './modules';

const startApolloServer = async (
  typeDefs: typeof schema,
  resolvers: typeof resolver,
): Promise<void> => {
  const PORT = process.env.PORT || 4000;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources: () => {
      return {
        genreAPI: new GenreAPI(),
        albumAPI: new AlbumAPI(),
        artistAPI: new ArtistAPI(),
        bandAPI: new BandsAPI(),
        trackAPI: new TrackAPI(),
        userAPI: new UserAPI(),
        favoritesAPI: new FavouritesAPI(),
      };
    },
    context: ({ req }) => {
      return {
        token: req.headers.authorization,
      };
    },
  });
  const { url } = await server.listen(PORT);
  process.stdout.write(`
    🚀 Server ready at ${url}
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev${EOL}
  `);
};

startApolloServer(schema, resolver);
