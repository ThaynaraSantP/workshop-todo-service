// const express = require ('express');
// const {ApolloServer, gql} = require ('apollo-server-express');

// //Schema gql que é minha funcao

// const typeDefs = gql`
// type Query{
//     hello: String
// } 
// `
// ;

// const resolvers = {
//   Query :{
//     hello: () => "Hello world!",
//   },
// };

// const server = new ApolloServer ({typeDefs, resolvers});

// const app = express();
// server.applyMiddleware({ app });

//     app.listen({port: 4000},() => {
//       console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
//     });
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {

  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      name: 'Hello',
      type: GraphQLString,
      resolve: () => 'Hello world!',
    }

  }

});

const schema = new GraphQLSchema({
  query: queryType,
});

const server = new ApolloServer({ schema });

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;
// const resolvers = {
//   Query: {
//     hello: () => "Hello world Thaynara!",
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => {
  console.log(`:rocket: Server ready at http://localhost:4000${server.graphqlPath}`);
});