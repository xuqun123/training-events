import express from 'express'
import {graphqlHTTP} from 'express-graphql'

import schema from './graphql/schema'
import resolvers from './graphql/resolvers'

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)
app.listen(3000)

console.log('Running a GraphQL API server at http://localhost:3000/graphql')
