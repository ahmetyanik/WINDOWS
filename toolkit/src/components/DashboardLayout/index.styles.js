import styled from 'styled-components'
import layoutLogo from '../../assets/svg/layout_logo.svg'

export const StyledContainer = styled.div`
  height: 100vh;
  position: relative;
`
export const StyledBox = styled.div`
  display: flex;
`
export const StyledAppBar = styled.div`
  background-color: #701d9f;
  position: fixed;
  width: calc(100% - 220px);
  margin-left: 220px;
`
export const StyledDrawer = styled.div`
  background-image: url(${layoutLogo});
  background-repeat: no-repeat;
  background-size: 180px 50px;
  width: 220px;
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
`
export const StyledList = styled.div`
  margin-top: 70px;
`
export const StyledMain = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-top: 60px;
  margin-left: 220px;
  padding: 10px;
  background-color: #e3e6f2;
  overflow-y: auto;
`
export const StyledOutletContainer = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 60px 0 30px;
`