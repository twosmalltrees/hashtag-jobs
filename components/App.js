import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ControlsSection from './ControlsSection'
import TweetsSection from './TweetsSection'

const API_BASE_URL = 'http://localhost:5000'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      tweetIds: [],
      page: 0,
      searchError: null,
      loading: true,
      searchType: 'hiring'
    }
    this.fetchPage = this.fetchPage.bind(this)
    this.fetchNextPage = this.fetchNextPage.bind(this)
    this.refreshSearch = this.refreshSearch.bind(this)
    this.setSearchType = this.setSearchType.bind(this)
  }

  componentDidMount () {
    this.fetchNextPage()
  }

  async fetchPage () {
    this.setState({ loading: true })
    try {
      const response = await axios({
        method: 'GET',
        url: `${API_BASE_URL}/tweets/${this.state.page}?searchType=${this.state.searchType}`,
        responseType: 'json'
      })
      this.setState({
        tweetIds: this.state.tweetIds.concat(response.data.map(tweet => tweet.tweet_id))
      })
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 2000)
    } catch (error) {
      this.setState({
        searchError: 'Hmmm... something went wrong.',
        loading: false
      })
    }
  }

  fetchNextPage () {
    const nextPage = this.state.page + 1
    this.setState({ page: nextPage }, () => {
      this.fetchPage()
    })
  }

  refreshSearch () {
    this.setState({ tweetIds: [], page: 0 }, () => {
      this.fetchNextPage()
    })
  }

  setSearchType (searchType) {
    this.setState({ searchType }, () => {
      this.refreshSearch()
    })
  }

  render () {
    return (
      <Wrapper>
        <ControlsSection
          toggleHiringSearchType={this.toggleHiringSearchType}
          toggleLookingSearchType={this.toggleLookingSearchType}
          searchType={this.state.searchType}
          setSearchType={this.setSearchType}
        />
        <TweetsSection
          tweetIds={this.state.tweetIds}
          searchError={this.statesearchError}
          loading={this.state.loading}
          fetchNextPage={this.fetchNextPage}
          firstTweetRendered={this.props.firstTweetRendered}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  overflow: hidden;
  position: absolute;
  @media (max-width: 1100px) {
    overflow: scroll;
    padding: 0 10px 0 10px;
  }
`
