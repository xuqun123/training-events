import {gql} from '@apollo/client'

const EVENT_FIELDS = gql`
  fragment eventFields on Event {
    Title
    Image
    Time
    AvailableSeats {
      id
    }

    Location {
      City
      State
      Country
    }
  }
`

const EVENTS_QUERY = gql`
  query(
    $keyword: String
    $location: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    events(
      keyword: $keyword
      location: $location
      startDate: $startDate
      endDate: $endDate
    ) {
      ...eventFields
    }
  }
  ${EVENT_FIELDS}
`
const EVENT_QUERY = gql`
  query($title: String!) {
    event(title: $title) {
      ...eventFields
    }
  }
  ${EVENT_FIELDS}
`

export {EVENTS_QUERY, EVENT_QUERY}
