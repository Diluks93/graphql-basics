import 'dotenv/config';
import { ApolloServer/*,  AuthenticationError */ } from 'apollo-server';
import { EOL } from 'node:os';
import { schema } from './modules';

const startApolloServer = async (typeDefs: typeof schema): Promise<void>/* , resolvers */ => {
  const PORT = process.env.PORT || 4000;
  const server = new ApolloServer({
    typeDefs,
    /* resolvers, */
    csrfPrevention: true,
    cache: 'bounded',
    /* context: ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization || '';

      // try to retrieve a user with the token
      const user = token;

      // optionally block the user
      // we could also check user roles/permissions here
      if (!user) throw new AuthenticationError('you must be logged in');

      // add the user to the context
      return { user };
    }, */
  });
  const { url } = await server.listen(PORT);
  process.stdout.write(`
    🚀 Server ready at ${url}
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev${EOL}
  `);
};

startApolloServer(schema);
