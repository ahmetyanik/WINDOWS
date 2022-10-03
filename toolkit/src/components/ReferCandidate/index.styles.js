import styled from 'styled-components'
import { TextField, Text } from '../../atoms'

export const StyledContainer = styled.div`
  padding-left:1rem;
  .flex {
    display: flex;
    width: 90%;
  }
  .buttonDiv {
    width: calc(100% - (100% * 0.03));
    display: flex;
    justify-content: end;
    padding-bottom:2rem;
    button {
      width: 67px;
      height: 36px;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      align-items: center;
      width: 100%;
    }
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

export const SubContainer = styled.div`
background-color: ${(p) => p.theme.colors.white};
padding: 1.5rem;
width: 85%;
 @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
  flex-direction: column;
  width: 100%;
 }`

export const StyledForm = styled.form`
  width: 100%;
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  padding: 0rem 1.4375rem;
  width: 100%;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 100%;
    padding: 0;
  }
`

export const StyledTextField = styled(TextField)`
  width: 100%;
`

export const StyledText = styled(Text)``

export const StyledContainer1 = styled.div`
  width: 100%;
  margin-top: 0.9rem;
  &.containerBox {
    display: flex;
    flex-direction: row;
    gap: 1.5625rem;
  }
  .bieuAh {
    width: 100%;
  }
  .phone {
    display: flex;
    .countryCode {
      width: 40%;
      margin-right: 1.5625rem;
    }
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    .containerBox {
      flex-direction: column;
    }
  }
  .buttonDiv,
  .text-example {
    display: flex;
    justify-content: center;
  }
`
