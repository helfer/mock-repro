import express from 'express'
const apollo = require('apollo-server')
import Schema from './data/schema'
import mocks from './data/mocks'

const GRAPHQL_PORT = 8080

const app = express()
const gqlServer = apollo.apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks
})

app.use('/', gqlServer)
app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
))
