import React, { Component } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

export default class LoaderButton extends Component {
  render () {
    return (
      <ButtonWrapper>
        <Button onClick={this.props.action} disabled={this.props.disabled} width={this.props.width}>{ this.props.text }</Button>
      </ButtonWrapper>
    )
  }
}

LoaderButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.func
}

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
`

const Button = styled.div`
  display: flex;
  font-family: Fredoka One;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '200px'};
  height: 40px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${props => props.disabled ? 'grey' : 'white'};
  color: black;
  cursor: ${props => props.disabled ? 'progress' : 'pointer'};
  font-weight: bold;
  letter-spacing: 0.5px;
  box-shadow:  ${props => props.disabled ? '0px 0px grey' : '4px 4px black'};
  transform: ${props => props.disabled ? 'translateY(4px) translateX(4px)' : 'translateY(0px) translateX(0px)'};
  transition: box-shadow 0.2s, transform 0.2s;
  :hover {
    transform: ${props => props.disabled ? 'translateY(4px) translateX(4px)' : 'translateY(2px) translateX(2px)'};
    box-shadow:  ${props => props.disabled ? '0px 0px grey' : '2px 2px black'};

  }
  :active {
    transform: ${props => props.disabled ? 'translateY(4px) translateX(4px)' : 'translateY(4px) translateX(4px)'};
    box-shadow:  ${props => props.disabled ? '0px 0px grey' : '0px 0px black'};
  }
`
