const db = require('./config/db');
const cors = require('cors');
const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(5000, () => {
    console.log("listening...")
});

db();
