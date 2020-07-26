const {buildSchema} = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  scalar DateTime

  type Query {
    events(keyword: String, location: String, startDate: DateTime, endDate: DateTime): [Event]
    event(title: String!): Event
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
