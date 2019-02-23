import React from 'react'
import styled from 'styled-components'
import Marquee3k from 'marquee3000'
import { flexRowCenteredVert, animationFadeIn } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'

export default class extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Marquee3k.init()
    }, 0);
  }
  render() {
    return (
      <TickerTape>
        <div className="marquee3k" data-speed="0.5" >
          <h1 dangerouslySetInnerHTML={{ __html: this.props.copy }}/>
        </div>
      </TickerTape>
    )
  }
}

const TickerTape = styled.div`
  ${animationFadeIn(2500, 100)};
  z-index: 9000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    line-height: 1.1;
    color: ${colors.yellow};
    ${flexRowCenteredVert};
    text-transform: uppercase;
  }
  .marquee3k__copy {
    box-sizing: border-box;
  }
`