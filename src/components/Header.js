import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Logo from './Logo'
import { flexCenteredAll } from './../styles/mixins'
import { heights } from './../styles/theme'
import { meta_defaults } from './../../config.json'

const Header = props => 
  <HeaderWrapper>
  </HeaderWrapper>

export default connect(
  state => ({
    resizeState: state.resizeState
  })
)(Header)

const HeaderWrapper = styled.header`
  ${flexCenteredAll};
  width: 100vw;
  height: ${heights.header};
  position: fixed;
  top: 0;
  left: 0;
`