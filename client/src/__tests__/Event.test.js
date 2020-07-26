import React from 'react'
import {MockedProvider} from '@apollo/client/testing'
import {shallow} from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {EVENT_QUERY} from '../graphql/queries'
import Event from '../components/Event'

Enzyme.configure({adapter: new Adapter()})

const mocks = [
  {
    request: {
      query: EVENT_QUERY,
    },
    result: {
      data: {
        event: {
            Title: 'Place 1',
            Time: '2018-07-22T02:30:00.000Z',
            Image: 'http://example.com/image.png',
            Location: {
              City: 'Brisbane',
              State: 'Queensland',
              Country: 'Australia',
            },
          },
      },
    },
  },
]

test('render Events', () => {
  const wrapper = shallow(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Event />
    </MockedProvider>
  )
  
  expect(wrapper.find(Event)).toBeDefined()
})
