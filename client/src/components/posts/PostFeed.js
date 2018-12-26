import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => {
          return (
            <p>{post.headline}</p>
          )
        })}
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
}


export default PostFeed;