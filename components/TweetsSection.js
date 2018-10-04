import React, { Component } from 'react'
import styled from 'styled-components'
import TweetEmbed from 'react-tweet-embed'
import LoaderButton from './LoaderButton'
import '../node_modules/loaders.css/loaders.css'

export default class TweetsSection extends Component {
  constructor () {
    super()
    this.handleFetchMoreClick = this.handleFetchMoreClick.bind(this)
    this.renderConent = this.renderContent.bind(this)
  }

  handleFetchMoreClick () {
    if (!this.props.loading) {
      this.props.fetchNextPage()
    }
  }

  renderContent () {
    return [
      this.props.tweetIds.map((tweetId) => {
        return (
          <TweetEmbed
            key={tweetId}
            id={tweetId}
            options={{
              cards: 'hidden',
              dnt: true
            }}
          />
        )
      }),
      <LoaderButton
        key='loader-btn'
        action={this.props.fetchNextPage}
        onClick={this.handleFetchMoreClick}
        text='Load More'
        disabled={this.props.loading}
      />
    ]
  }

  render () {
    return (
      <Wrapper id='tweet-section'>
        { this.renderContent() }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  box-sizing: border-box;
  top: 0;
  padding-top: 60px;
  padding-bottom: 100px;
  margin-bottom: 80px;
  left: 45%;
  width: 550px;
  height: 100%;
  overflow: scroll;
  background-color: none;
  @media (max-width: 1100px) {
    padding: 10px
    padding-top: 0px;
    height: auto;
  }
  @media (max-width: 550px) {
    padding: 10px
    width: 100%;
    height: auto;
    font-size: 16px;
  }
`
