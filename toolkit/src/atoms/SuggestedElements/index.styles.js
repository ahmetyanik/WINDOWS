import styled from 'styled-components'
import Text from '../Text/index'
import { TextField, Button } from '@mui/material'
import SelectItem from '../../components/SelectItem'

export const StyledBody = styled.div`
  width: 100%;

  .listedButton:hover {
    background-color: ${(p) => p.theme.colors.unselectedItems};
  }

  .added:hover {
    background-color: ${(p) => p.theme.colors.addedItems};
  }

  .add:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`
export const StyledGridLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: start;
  justify-items: stretch;
  /* row-gap: 0.625rem; */
  /* column-gap: 1.875rem; */

  &.searchLine {
    grid-template-columns: 2fr 1fr;
    column-gap: 3.75rem;
  }

  &.addedLine {
    padding: 0.5rem 0;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 0.625rem;
    &.searchLine {
      column-gap: 1.25rem;
    }
  }
`
export const StyledTextField = styled(TextField)`
  width: calc(100% + 1.875rem);
  text-align: center;
  input {
    padding: 0.5rem 0.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    width: 100%;
  }
`

export const StyledButton = styled(Button)`
  &.add {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary50};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    text-overflow: clip;
  }

  &.listedButton {
    height: 2.1875rem;
    background-color: ${(p) => p.theme.colors.unselectedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    overflow: hidden;
  }

  &.added {
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    text-overflow: clip;
    height: 2.1875rem;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    .icon {
      color: ${(p) => p.theme.colors.black};
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  &.link {
    color: ${(p) => p.theme.colors.primary};
    text-transform: Capitalize;
    justify-content: flex-start;
    height: 2.1875rem;
  }
`
export const StyledOverline = styled(Text)`
  color: ${(p) => p.theme.colors.overLineColor};
  display: block;
  margin-top: 1.0625rem;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
`
export const StyledHeadline = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
`
export const StyledSubtitle = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin-top: 0.3125rem;
  margin-bottom: 1.25rem;
  margin-left: 0;
  margin-right: 0;
`
export const StyledButtonBody = styled.div`
  display: grid;
  padding: 0.625rem 0;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: start;

  justify-items: stretch;
  grid-template-rows: auto;

  row-gap: 0.625rem;
  column-gap: 1.875rem;
  height: 15.625rem;
  max-height: 12.5rem;
  overflow-y: auto;
`
export const StyledAddedScroll = styled.div`
  margin-top: 0.625rem;
  padding: 0.625rem 0;
  height: 12.5rem;
  max-height: 11.875rem;
  overflow-y: auto;
`

export const StyledSelectItem = styled(SelectItem)`
  &.select-item {
    margin: 0;
    padding: 0;
  }
  .MuiSelect-select {
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
  }
`

export const StyledGridItem = styled.div`
  height: 2.125rem;
`
