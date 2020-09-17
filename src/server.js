import { GraphQLServer, PubSub } from 'graphql-yoga';
import prisma from './prisma';

import db from './db';
import { resolvers, fragmentReplacements } from './resolvers/index';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return {
      db,
      pubsub,
      prisma,
      // Used to authenticate requests by extracting request
      request,
    };
  },
  fragmentReplacements,
});

export { server as default };
