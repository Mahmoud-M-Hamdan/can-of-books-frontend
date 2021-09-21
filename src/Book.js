import React, { Component } from 'react'

class Book extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.description}</h1>
                <h1>{this.props.status}</h1>
                <h1>{this.props.email}</h1>
                <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete</button>
                <button onClick={()=>{this.props.handleUpdate(this.props.id,this.props.title, this.props.email,this.props.description, this.props.status)}}>Update</button>
            </div>
        )
    }
}

export default Book

