import {ApolloProvider} from '@apollo/client'
import React from 'react'
import {client} from './index'

import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Training Events
          </a>
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
