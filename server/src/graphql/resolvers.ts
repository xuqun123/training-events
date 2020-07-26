import events from '../utils/events'

const resolvers = {
  events: () => {
    // return dump events data
    return events
  },
}

export default resolvers
