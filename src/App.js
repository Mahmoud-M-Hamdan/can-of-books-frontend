import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount = () => {
    
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/seed-data`).then((res) => {
      this.setState({
        data: res.data,
        
      });
      console.log(this.state.data)
    });
  };
  render() {
    return (
      <>
      <h1>Data</h1>
        {
          this.state.data.map(post=>{
            return <>
            <h1>{post.title}</h1>
            <h1>{post.description}</h1>
            <h1>{post.status}</h1>
            <h1>{post.email}</h1>
            
            </>
          })
        }
      </>
    )
  }
}

export default App