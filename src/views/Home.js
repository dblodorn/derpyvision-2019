import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexCenteredAll } from './../styles/mixins'
import { Head, Logo } from './../components'

const Home = props => 
  <Fragment>
    <Head title={`Welcome`} />
    <HomeSplash>
      <Logo/>
    </HomeSplash>
  </Fragment>

export default connect(
  state => ({
    apiData: state.apiData,
    resizeState: state.resizeState
  })
)(Home)

const HomeSplash = styled.section`
  ${flexCenteredAll};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`