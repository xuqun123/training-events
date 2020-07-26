import LocationType from './LocationType'
import AvailableSeatType from './AvailableSeatType'

interface EventType {
  Title: string
  Time: string
  Image?: string
  Location: LocationType
  AvailableSeats?: AvailableSeatType[]
}

export default EventType
