import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
