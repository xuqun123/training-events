export interface SearchVariablesType {
  keyword?: string
  location?: string
  startDate?: string
  endDate?: string
}

export interface SearchFormType {
  handleSubmit: (variables: SearchVariablesType) => void
}
