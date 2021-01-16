const { ApolloServer, gql } = require('apollo-server');
const sessions = require('./data/sessions.json')

const typeDefs = gql`type Query{
    sessions:[Session],
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
    
type Session{
    id:ID!
    title: String!,
    description:String,
    startsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format:String,
    track:String,
    level:String
}`;

const resolvers ={
    Mutation :{addUser: (root, args, context, info) => {
        console.log(args)
        return{id: 1, name: "dd", username:"gg", email: "ff"}
      }},
   // Mutation:{users:(x,y,z,g,h)=>console.log(x,"x",y,"y",z,"z",g,"g",h)},
    Query:{sessions:()=>{return sessions},ciao:()=>[{"id":1,"nome":"Daniel","cognome":"piga"},{"id":2,"nome":"jack","cognome":"boo"}]}
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});