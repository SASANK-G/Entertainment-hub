import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

const [type, setType] = useState(0);






const Search = () => {
  return (
    <div>
      <TextField
      style={{flex:1}}
      className="searchBox"
      label="Search"
      variant="filled"
      onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Search
