const {buildSchema} = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    events: [Event]
  }

  type Event {
    Title: String!
    Time: String
    Image: String
    Location: Location!
    AvailableSeats: [AvailableSeat]
  }

  type Location {
    City: String
    State: String
    Country: String
  }

  type AvailableSeat {
    id: String!
  }  
`)

export default schema
