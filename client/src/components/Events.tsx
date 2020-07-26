import React from 'react'
import {List, Segment, Dimmer, Loader, Divider} from 'semantic-ui-react'
import {useQuery} from '@apollo/client'

import {EVENTS_QUERY} from '../graphql/queries'
import EventType from '../interfaces/EventType'
import {SearchVariablesType} from '../interfaces/SearchFormTypes'
import EventItem from './EventItem'
import Search from './Search'
import client from '../graphql/client'

const Events: React.FC = () => {
  const [events, setEvents] = React.useState<EventType[]>([])

  const {loading} = useQuery(EVENTS_QUERY, {
    variables: {},
    onCompleted: ({events}: {events: EventType[]}) => {
      setEvents(events)
    },
    onError: (error: Error) => console.log(error),
  })

  if (loading)
    return (
      <Dimmer active>
        <Loader>Loading ...</Loader>
      </Dimmer>
    )

  const handleSubmit = (variables: SearchVariablesType) => {
    client
      .query({
        query: EVENTS_QUERY,
        variables,
      })
      .then((result: any) => {
        if (result?.data?.events) setEvents(result.data.events)
      })
      .catch((error: Error) => console.log(error))
  }

  return (
    <Segment>
      <Search handleSubmit={handleSubmit} />
      <Divider />
      <List divided relaxed>
        {events &&
          events.map((event: EventType, index: number) => (
            <EventItem event={event} key={index} />
          ))}
      </List>
    </Segment>
  )
}

export default Events
