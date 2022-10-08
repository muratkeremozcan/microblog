import React, {useState} from 'react'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

export default function PeopleSearch({onSearch}) {
  const [text, setText] = useState('')
  const handleChange = e => setText(e.target.value)
  const handleSearch = () => onSearch(text)

  return (
    <form data-cy="people-search">
      <InputBase
        placeholder="Search People"
        value={text}
        onChange={handleChange}
        autoFocus
      />

      <IconButton data-cy="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </form>
  )
}
