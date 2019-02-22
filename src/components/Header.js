import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Logo from './Logo'
import { flexCenteredAll } from './../styles/mixins'
import { meta_defaults } from './../../config.json'

const Header = props => 
  <HeaderWrapper>
    <Logo/>
  </HeaderWrapper>

export default connect(
  state => ({
    resizeState: state.resizeState
  })
)(Header)

const HeaderWrapper = styled.header`
  ${flexCenteredAll};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`