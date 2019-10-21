// const path = require('path')
const express = require("express");
const next = require("next");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();
// const csrf = require('csurf');

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dev });
const handle = appNext.getRequestHandler();


// const connectDb = require("./db");
// const typeDefs = require("./graphql/schema.js");
// const resolvers = require("./graphql/resolvers");
// const UserModel = require('./models/User')

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "hello world",
  },
};


//APOLLO SERVER INIT
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // uploads: {
  //   maxFileSize: 10000000, // 10 MB
  //   maxFiles: 20
  // },
  // context(request){
  //   return{
  //     request,
  //     UserModel
  //   }
  // }
});

//NEXT APP INIT
appNext.prepare().then(() => {
  const app = express();

  //MONGO INIT
  // connectDb()
  server.applyMiddleware({ app });

  //IMAGE MIDDLEWARE
  // app.use(
  //   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
  // );
  app.get('/palette/:id', (req, res) => {
    return appNext.render(req, res, '/palette', req.query)
  })

  // app.get('/b', (req, res) => {
  //   return appNext.render(req, res, '/b', req.query)
  // })

  // app.get('/posts/:id', (req, res) => {
  //   return appNext.render(req, res, '/posts', { id: req.params.id })
  // })

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
