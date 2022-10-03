import { StyledContainer } from './index.styles'
import PageOf from './PageOf'
import Search from './Search'

import Tablo from './Tablo'

const Jobs = () => {
  return (
    <StyledContainer>
      <Search />
      <Tablo />
      <PageOf />
    </StyledContainer>
  )
}

export default Jobs
