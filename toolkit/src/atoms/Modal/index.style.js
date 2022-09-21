import styled from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'


export const StyledContainer = styled.div`
  .box {
    position: absolute;
    top: 9.375rem;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 28.125rem;
    height: 220px;
    background: ${(p) => p.theme.colors.white};
    border: 0.0625rem solid ${(p) => p.theme.colors.modalBorderColor};
    border-radius: 4px;
    transform: translateX(-50%);
  }

  .btn {
    position: absolute;
    bottom: 1.625rem;
    padding: 0.625rem 1rem;
    height: 2.25rem;
    background: ${(p) => p.theme.colors.primary};
    border-radius: 4px;
    border: none;
    color: white;
    letter-spacing: 0.0781rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    cursor: pointer;
  }
`

export const CloseButton = styled(AiFillCloseCircle)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0.9375rem;
  top: 0.6875rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`

export const InBox = styled.div`
  width: calc(100% - 2.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 2.9375rem 1.25rem 5rem;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  line-height: 1.25rem;
`


