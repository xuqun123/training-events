import React from 'react'
import {Label, List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import AvailableSeatType from '../interfaces/AvailableSeatType'
import EventType from '../interfaces/EventType'

const EventItem: React.FC<{event: EventType}> = ({event}) => (
  <List.Item key={event.Title}>
    <List.Content>
      <List.Header>
        <Link to={`/events/${event.Title}`}>{event.Title}</Link>
        {` - `}
        {event.Location &&
          `${event.Location.City}, ${event.Location.State}, ${event.Location.Country}`}
        {event.AvailableSeats ? (
          event.AvailableSeats.map((availableSeat: AvailableSeatType) => (
            <Label color="blue" style={{float: 'right'}} key={availableSeat.id}>
              {availableSeat.id}
            </Label>
          ))
        ) : (
          <Label color="red" style={{float: 'right'}}>
            Not Available
          </Label>
        )}
      </List.Header>
      <List.Description as="a">{event.Time}</List.Description>
    </List.Content>
  </List.Item>
)

export default EventItem
