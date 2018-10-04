import React, { Component } from 'react'
import '../node_modules/rc-checkbox/assets/index.css'
import styled from 'styled-components'

export default class ControlsSection extends Component {
  render () {
    return (
      <Wrapper>
        <Title>hashtag<br />jobs</Title>
        <InstructionsContainer>
          <Header>What is this?</Header>
          <p>
            It's a little app that collates "we're hiring!" and "I'm looking for work!" tweets from the tech industry, then serves them up here for your convenience.
          </p>
          <Header>How do I get my tweet up here?</Header>
          <p>
            Easy! If you're looking for work in the tech industry, or have a job going, then just tweet with <strong>#hashtagjobs</strong>.
          </p>
        </InstructionsContainer>
      </Wrapper>
    )
  }
}

const Header = styled.div`
  font-family: Fredoka One;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 1100px) {
    width: 500px;
    height: auto;
    font-size: 18px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: auto;
    font-size: 16px;
  }
`

const InstructionsContainer = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  font-weight: 400;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  text-align: right;
  width: 500px;
  height: 100%;
  background-color: none;
  @media (max-width: 1100px) {
    width: 500px;
    height: auto;
    text-align: center;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: auto;
  }
`

const Title = styled.h1`
  color: #191919;
  font-family: 'Fredoka One';
  font-size: 85px;
  letter-spacing: 5px;
  background: -webkit-linear-gradient(top left, #f79d00, #64f38c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 1px #191919) drop-shadow(2px 2px #191919) drop-shadow(3px 3px #191919);
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: #191919;
  cursor: pointer;
  :hover {
    transform: translate(2px, 2px);
    filter: drop-shadow(1px 1px #191919) drop-shadow(2px 2px #191919);
  }

  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 550px) {
    font-size: 50px;
  }
`
