const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = "mongodb://127.0.0.1:27017";

mongoose.connect(uri);

mongoose.connection.once('open', () => {
  console.log('connection to database');
});

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000, () => {
  console.log('now listening on port 4000');
});
