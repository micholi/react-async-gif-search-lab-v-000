import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (term) => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ gifs: data.map(g =>
            ({ url: g.images.original.url }))
          })
        })
    }

  componentDidMount() {
    this.fetchGifs()
  }

}

export default GifListContainer;
