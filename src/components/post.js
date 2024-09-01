import React, { Component } from 'react';

class Post extends Component {

    renderTopics() {
        let topics = this.props.films.map((topic, index) => {
            return <span className='post-topic' key={index}>{topic}</span>
        })
        return topics;
    }

    render() {
        return (
            <li className='recent-post'>
                <div className='recent-post__title'>
                    {this.props.name}
                </div>

                <div className='recent-post__topics'>
                    {this.renderTopics()}
                </div>
            </li>
        )
    }
}

export default Post;