import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import cors from 'cors'

import schema from './graphql/schema'
import resolvers from './graphql/resolvers'

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context: {},
  })
)
app.listen(3000)

console.log('Running a GraphQL API server at http://localhost:3000/graphql')
