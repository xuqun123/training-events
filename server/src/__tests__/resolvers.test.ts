import resolvers from '../graphql/resolvers'
import eventsData from '../utils/events'

describe('GQL resolvers', () => {
  describe('events', () => {
    let events

    describe('when no param is provided', () => {
      beforeEach(() => {
        events = resolvers.events({})
      })

      it(`should return all events`, () => {
        expect(events.length).toBe(eventsData.length)
      })
    })

    describe('when keyword is provided', () => {
      beforeEach(() => {
        events = resolvers.events({
          keyword: 'place 1',
        })
      })

      it(`should return events with title is similar with 'place 1'`, () => {
        expect(events.length).toBe(1)
        expect(events[0].Title).toBe('Place 1')
      })
    })

    describe('when location is provided', () => {
      beforeEach(() => {
        events = resolvers.events({
          location: ' Gold coast',
        })
      })

      it(`should return events that matches the location`, () => {
        expect(events.length).toBe(6)
      })
    })

    describe('when startDate is provided', () => {
      it(`should return events that start after the given date`, () => {
        events = resolvers.events({
          startDate: new Date('2018-01-01T02:30:00.000Z'),
        })
        expect(events.length).toBe(eventsData.length)

        events = resolvers.events({
          startDate: new Date('2020-01-01T02:30:00.000Z'),
        })
        expect(events.length).toBe(0)
      })
    })

    describe('when endDate is provided', () => {
      it(`should return events that end before the given date`, () => {
        events = resolvers.events({
          endDate: new Date('2018-01-01T02:30:00.000Z'),
        })
        expect(events.length).toBe(0)

        events = resolvers.events({
          endDate: new Date('2020-01-01T02:30:00.000Z'),
        })
        expect(events.length).toBe(eventsData.length)
      })
    })

    describe('when multiple params are provides', () => {
      beforeEach(() => {
        events = resolvers.events({
          keyword: 'Place 3',
          location: 'Gold Coast',
          startDate: new Date('2018-01-01T02:30:00.000Z'),
          endDate: new Date('2020-01-01T02:30:00.000Z'),
        })
      })

      it(`should filter events based on params`, () => {
        expect(events.length).toBe(1)
        expect(events[0].Title).toBe('Place 3')
      })
    })
  })

  describe('event', () => {
    let event

    describe('when title is not found in the events list', () => {
      beforeEach(() => {
        event = resolvers.event({title: 'not found title'})
      })

      it(`should return null`, () => {
        expect(event).toBeUndefined()
      })
    })

    describe('when title is found in the events list', () => {
      const dumpEvent = eventsData[1]
      beforeEach(() => {
        event = resolvers.event({title: dumpEvent.Title})
      })

      it(`should return the event`, () => {
        expect(event).toBeDefined()
        expect(event.Title).toEqual(dumpEvent.Title)
        expect(event.Time).toEqual(dumpEvent.Time)
        expect(event.Image).toEqual(dumpEvent.Image)
      })
    })
  })
})
