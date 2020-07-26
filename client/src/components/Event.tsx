import React from 'react'
import {Segment} from 'semantic-ui-react'
import {useParams} from 'react-router-dom'

const Event: React.FC = () => {
  let {title} = useParams()
  return <Segment>{title}</Segment>
}

export default Event
