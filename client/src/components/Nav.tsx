import React from 'react'
import {Segment, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Nav: React.FC = () => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/events/Place 1">Event 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/events/Place 2">Event 2</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/events/Place 3">Event 3</Link>
      </Menu.Item>
    </Menu>
  </Segment>
)

export default Nav
