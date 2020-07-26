import React from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import {
  SearchVariablesType,
  SearchFormType,
} from '../interfaces/SearchFormTypes'

const Search: React.FC<SearchFormType> = ({handleSubmit}) => {
  const [variables, setVariables] = React.useState<SearchVariablesType>({})
  const formRef = React.useRef(null)

  const handleChange = (e: any, {name, value}: {name: string; value: string}) =>
    setVariables({...variables, ...{[name]: value}})

  const handleReset = () => window.location.reload(false)

  return (
    <Form
      ref={formRef}
      className="search-form"
      onSubmit={() => handleSubmit(variables)}
    >
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Search by keyword"
          name="keyword"
          placeholder="please enter a title or descrption"
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          label="Location"
          name="location"
          value={variables.location}
          placeholder="please enter a city, state or country"
          onChange={handleChange}
        />
        <Form.Field
          control={SemanticDatepicker}
          label="Start Date"
          name="startDate"
          placeholder="start date"
          onChange={handleChange}
        />
        <Form.Field
          control={SemanticDatepicker}
          label="End Date"
          name="endDate"
          placeholder="end date"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="search-btns">
        <Form.Field secondary control={Button}>
          Search
        </Form.Field>
        <Button content="Reset" onClick={handleReset} />
      </Form.Group>
    </Form>
  )
}

export default Search
