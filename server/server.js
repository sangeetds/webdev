const db = require('./config/db');
const express = require('express');
const schema = require('./schema/schema');
const cors = require( `cors` );
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require("graphql-playground-middleware-express").default;
const dotenv = require('dotenv');
dotenv.config();

const app = express();

db();

app.use( cors() );

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`listening at port ${process.env.PORT}`)
});
