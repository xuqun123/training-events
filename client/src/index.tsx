import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query(
        $keyword: String
        $location: String
        $startDate: DateTime
        $endDate: DateTime
      ) {
        events(
          keyword: $keyword
          location: $location
          startDate: $startDate
          endDate: $endDate
        ) {
          Title
          Image
          Time
          AvailableSeats {
            id
          }

          Location {
            City
            State
            Country
          }
        }

        event(title: "Place 1") {
          Title
          Time
          Image
        }
      }
    `,
  })
  .then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
