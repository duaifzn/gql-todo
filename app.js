const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const graphqlHTTP = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gql', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => { console.error(error) })
db.once('open', () => { console.log('connected to mongoDB') })

const typeDefs = require('./qraphql/types/index')
const resolvers = require('./qraphql/resolvers/index')
const schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers })


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}),
);

app.listen(port, () => {
  console.log(`server running`)
})