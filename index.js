const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`type Query{
        ciao: [Ciao]
    }
    type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }
    type Ciao{
        id:ID
        nome:String,
        cognome:String
    }
    
    type Mutation{addUser(id: ID, name: String, username: String, email: String): User}
   `; 

const resolvers ={
    Mutation :{addUser: (root, args, context, info) => {
        console.log(args)
        return{id: 1, name: "dd", username:"gg", email: "ff"}
      }},
    Query:{ciao:()=>[{"id":1,"nome":"Daniel","cognome":"piga"},{"id":2,"nome":"jack","cognome":"boo"}]}
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});