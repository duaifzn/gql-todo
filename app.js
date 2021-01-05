const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools');
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
console.log("mongodburi: " + process.env.MONGODB_URI)
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gql',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => { console.error(error) })
db.once('open', () => { console.log('connected to mongoDB') })

const typeDefs = require('./qraphql/types/index')
const resolvers = require('./qraphql/resolvers/index')
const schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers })
app.use(cors({
  origin: function (origin, callback) {
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}))
app.use(cookieParser())

app.use((req, res, next) => {
  const accessToken = req.cookies['access-token']
  //const accessToken = req.headers['access-token']
  //console.log(accessToken)
  let data
  try {
    data = jwt.verify(accessToken, process.env.JWT_SECRET)
  } catch (err) {

    req.isAuth = false
    return next()
  }
  if (!data) {
    req.isAuth = false
    return next()
  }
  req.isAuth = true
  req.userId = data.userId
  next()
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}),
);

app.listen(port, () => {
  console.log(`server running`)
})





