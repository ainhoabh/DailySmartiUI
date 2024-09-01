import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
          <li>{this.props.name}</li>
        )
    }
}

export default Post;