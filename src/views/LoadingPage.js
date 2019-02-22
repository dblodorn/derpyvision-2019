import React from 'react'
import styled from 'styled-components'
import { fullWindow, flexCenteredAll } from './../styles/mixins'

export default () =>
  <LoadingWrapper></LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
`
