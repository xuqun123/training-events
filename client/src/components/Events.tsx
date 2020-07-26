import React from 'react'
import {List, Segment} from 'semantic-ui-react'
import {useParams} from 'react-router-dom'

const Events: React.FC = () => {
  let {title} = useParams()

  return (
    <Segment>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{title}</List.Header>
            <List.Description as="a">Updated 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
            <List.Description as="a">Updated 22 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
            <List.Description as="a">Updated 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  )
}

export default Events
