import React from 'react'
import {List, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {useQuery} from '@apollo/client'

import {EVENTS_QUERY} from '../graphql/queries'
import EventType from '../interfaces/EventType'
import EventItem from './EventItem'

const Events: React.FC = () => {
  const {loading, data} = useQuery(EVENTS_QUERY, {
    variables: {},
  })
  if (loading)
    return (
      <Dimmer active>
        <Loader>Loading ...</Loader>
      </Dimmer>
    )

  return (
    <Segment>
      <List divided relaxed>
        {data?.events?.map((event: EventType, index: number) => (
          <EventItem event={event} key={index} />
        ))}
      </List>
    </Segment>
  )
}

export default Events
