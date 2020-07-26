import {ApolloProvider} from '@apollo/client'
import React from 'react'
import Nav from './components/Nav'
import Events from './components/Events'
import Event from './components/Event'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import client from './graphql/client'

import './App.css'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
          <Nav />
          <Switch>
            <Route path={`/events/:title`}>
              <Event />
            </Route>
            <Route path="/">
              <Events />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
