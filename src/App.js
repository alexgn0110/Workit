import React, { Component } from 'react';
import PostList from './components/postList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
      //My APIKey> 2499739844034c77af4097940c655704
      //Workit API> 803fdd9b8517490d89d8c85ade466b8d
  componentDidMount() {
    axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=803fdd9b8517490d89d8c85ade466b8d'
    ).then(res => {
      this.setState({
        data: res.data.articles
      })  
    }).catch((err) => {
      console.log('I\'m sorry, Error......')
    })
  }

  render() {
    return (
      <div>
        <PostList  data={this.state.data} />
      </div>
    );
  }
}

export default App;
