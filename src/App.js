import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksList: [],
      title: '',
      description: '',
      status: '',
      email: '',
      id: '',
      showUpdate: false
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)
      .then(res => {
        this.setState({ booksList: res.data });
      })
  }
  handleDelete = (id) => {
    let config = {
      method: "DELETE",
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/delete-book/${id}`
    }
    axios(config).then(res => {
      console.log(res.data);
    })

  }
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  }

handldescription = (e) => {
  this.setState({ description: e.target.value });
}

handlestatus = (e) => {
  this.setState({ status: e.target.value });
}

handleSubmit = (e) => {
  e.preventDefault();
  let config = {
    method: "POST",
    baseURL: process.env.REACT_APP_BACKEND_URL,
    url: `/create-book`,
    data: {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      email: this.state.email,
    }
  }
  axios(config).then(res => {
    console.log(res.data)
    this.setState({
      booksList: res.data
    })
  })
}
handleUpdate = (id, title, email, description, status) => {
  this.setState({
    title: title,
    description: description,
    status: status,
    email: email,
    id: id,
    showUpdate: true
  })
}
handleUpdateForm = () => {
  let config = {
    method: "PUT",
    baseURL: process.env.REACT_APP_BACKEND_URL,
    url: `/update-book/${this.state.id}`,
    data: {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      email: this.state.email
    }
  }
  axios(config).then(res => {
    this.setState({
      booksList: res.data
    })
  });
}
render() {
  return (
    <div>
      {
        !this.state.showUpdate ? <>
          <form onSubmit={this.handleSubmit}>
            <input type="texts" placeholder="title" onChange={this.handleTitle} />
            <input type="texts" placeholder="description" onChange={this.handldescription} />
            <input type="texts" placeholder="status" onChange={this.handlestatus} />
            <input type="texts" placeholder="email" onChange={this.handleEmail} />
            <input type="submit" value="create" />
          </form>
        </> :
          // Update form
          <form onSubmit={this.handleUpdateForm}>
            <input
              type="texts"
              onChange={this.handleTitle}
              value={this.state.title}
            />
            <input
              type="texts"
              onChange={this.handldescription}
              value={this.state.description}
            />
            <input
              type="texts"
              onChange={this.handlestatus}
              value={this.state.status}
            />
            <input
              type="texts"
              value={this.state.email}
              onChange={this.handleEmail} />
            <input type="submit" value="update" />
          </form>
      }
      {
        this.state.booksList.map(book => {
          return <Book
            title={book.title}
            description={book.description}
            status={book.status}
            email={book.email}
            id={book._id}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        })
      }
    </div>
  )
}
}

export default App





// import React, { Component } from 'react';

// import axios from 'axios';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       data:[]
//     }
//   }
//   componentDidMount = () => {

//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/seed-data`).then((res) => {
//       this.setState({
//         data: res.data,

//       });
//       console.log(this.state.data)
//     });
//   };
//   render() {
//     return (
//       <>
//       <h1>Data</h1>
//         {
//           this.state.data.map(post=>{
//             return <>
//             <h1>{post.title}</h1>
//             <h1>{post.description}</h1>
//             <h1>{post.status}</h1>
//             <h1>{post.email}</h1>

//             </>
//           })
//         }
//       </>
//     )
//   }
// }

// export default App