import React, { Component } from 'react'
import Movies from './Movies'
import Search from './Search'

export default class App extends Component {
  state = {
    movies: []
  }

  componentDidMount = () => {
    fetch('http://www.omdbapi.com/?apikey=69249a39&s=panda')
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search }))
  }
  SearchMv = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=69249a39&s=${str}`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.Search }))
  }
  render() {
    // console.log(this.state.movies)
    return (
      <>
        <Search SearchMv={this.SearchMv} />
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <span className='loading'>Loading...</span>}
      </>
    )
  }
}
