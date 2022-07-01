import 'dotenv/config';
import { ApolloServer, AuthenticationError } from 'apollo-server';
import axios from 'axios';
import { EOL } from 'node:os';

import {
  resolver, schema, GenreAPI, AlbumAPI, ArtistAPI, BandsAPI, TrackAPI, UserAPI,
} from './modules';

const startApolloServer = async (typeDefs: typeof schema, resolvers: any): Promise<void> => {
  const PORT = process.env.PORT || 4000;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: async ({ req }) => {
      const token = req.headers.authorization || '';
      const userId = token.split(' ')[1]; // get the user name after 'Bearer '
      if (userId) {
        const { data } = await axios
          .get(`${process.env.USERS}/${userId}`)
          .catch((error) => {
            throw new AuthenticationError(error.message);
          });

        return { userId: data.id, userRole: data.role };
      }
    },
    dataSources: () => {
      return {
        genreAPI: new GenreAPI(),
        albumAPI: new AlbumAPI(),
        artistAPI: new ArtistAPI(),
        bandAPI: new BandsAPI(),
        trackAPI: new TrackAPI(),
        userAPI: new UserAPI(),
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
