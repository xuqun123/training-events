import {filter, find} from 'lodash'

import eventsData from '../utils/events'
import EventType from '../interfaces/EventType'
import LocationType from '../interfaces/LocationType'
import {EventEmitter} from 'events'

const resolvers = {
  events: ({
    keyword,
    location,
    startDate,
    endDate,
  }: {
    keyword: string
    location: string
    startDate: Date
    endDate: Date
  }): EventType[] => {
    // inject dump events data first
    let events = eventsData

    // query by keyword
    if (keyword) {
      events = filter(events, (event: EventType) =>
        event.Title.toLowerCase().match(keyword.toLowerCase().trim())
      )
    }

    // query by location
    if (location) {
      events = filter(events, (event: EventType) => {
        const {City, State, Country}: LocationType = event.Location
        return [City, State, Country]
          .map((value: string) => value.toLocaleLowerCase())
          .includes(location.toLocaleLowerCase().trim())
      })
    }

    // query by start date
    if (startDate) {
      const queryDate = new Date(startDate)
      events = filter(
        events,
        (event: EventType) => event.Time && new Date(event.Time) >= queryDate
      )
    }

    // query by end date
    if (endDate) {
      const queryDate = new Date(endDate)
      events = filter(
        events,
        (event: EventType) => event.Time && new Date(event.Time) <= queryDate
      )
    }
    return events
  },
  event: ({title}: {title: string}): EventType => {
    return find(eventsData, ['Title', title])
  },
}

export default resolvers
