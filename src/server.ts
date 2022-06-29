import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { EOL } from 'node:os';

const startApolloServer = async (typeDefs: any): Promise<void>/* , resolvers */ => {
  const PORT = process.env.PORT || 4000;
  const server = new ApolloServer({
    typeDefs,
    /* resolvers, */
    csrfPrevention: true,
    cache: 'bounded',
  });
  const { url } = await server.listen(PORT);
  process.stdout.write(`
    🚀 Server ready at ${url}
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev${EOL}
  `);
};
