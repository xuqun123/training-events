import React from 'react'
import {Dimmer, Loader} from 'semantic-ui-react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'

import EventItem from './EventItem'
import {EVENT_QUERY} from '../graphql/queries'

const Event: React.FC = () => {
  let {title} = useParams()

  const {loading, data} = useQuery(EVENT_QUERY, {
    variables: {title},
  })
  if (loading)
    return (
      <Dimmer active>
        <Loader>Loading ...</Loader>
      </Dimmer>
    )

  return <EventItem event={data.event} />
}

export default Event
