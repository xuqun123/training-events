import React from 'react'
import {render} from '@testing-library/react'
import {MockedProvider} from '@apollo/client/testing'
import {shallow} from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {EVENTS_QUERY} from '../graphql/queries'
import Events from '../components/Events'

Enzyme.configure({adapter: new Adapter()})

const mocks = [
  {
    request: {
      query: EVENTS_QUERY,
    },
    result: {
      data: {
        events: [
          {
            Title: 'Place 1',
            Time: '2018-07-22T02:30:00.000Z',
            Image: 'http://example.com/image.png',
            Location: {
              City: 'Brisbane',
              State: 'Queensland',
              Country: 'Australia',
            },
          },
          {
            Title: 'Place 2',
            Time: '2018-07-24T02:30:00.000Z',
            Image: 'http://example.com/image.png',
            Location: {
              City: 'Cairns',
              State: 'Queensland',
              Country: 'Australia',
            },
            AvailableSeats: [
              {
                id: 'W25',
              },
              {
                id: 'B29',
              },
            ],
          },
        ],
      },
    },
  },
]

test('render Events', () => {
  const wrapper = shallow(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Events />
    </MockedProvider>
  )

  expect(wrapper.find(Events)).toBeDefined()
})
