import styled from 'styled-components'

export const StyledContainer = styled.div`
  padding: 1rem 1rem 1rem;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.5625rem;
  }

  .div-search {
    flex-direction: column;
    display: flex;
    flex-direction: row;
    height: 2rem;
    line-height: 5rem;
  }
  .search-text {
    width: 49rem;
  }

  .search-add {
    border-radius: 1rem;
    line-height: 5rem;
  }

  .search-button {
    margin-left: 1rem;
    height: 2rem;
  }

  .page-of {
    flex-direction: column;
    flex-direction: row;
  }

  .text {
    margin-bottom: 1rem;
  }

  .search-icon {
    margin-top: 1rem;
    position: absolute;
    display: flex;
    margin-left: 1rem;
  }
`
