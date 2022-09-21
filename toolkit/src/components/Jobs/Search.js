import TextField from '@mui/material/TextField'
import { Text } from '../../atoms'
import ButtonSearch from './ButtonSearch'
import { StyledContainer } from './index.styles'

const Search = () => {
  return (
    <StyledContainer>
      <Text type="Headline2" className="text">
        <b> Browse new jobs with Talrise</b>
      </Text>
      <div className="div-search">
        <TextField
          id="outlined-basic"
          label="Type to search..."
          variant="outlined"
          className="search-text "
        />
        <ButtonSearch />
      </div>
    </StyledContainer>
  )
}

export default Search
