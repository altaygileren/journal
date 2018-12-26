import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Postform from './Postform';
import { getPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {

    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null || loading) {
      postContent = <h4>Post blanks</h4>
    } else {
      postContent = <PostFeed posts={posts} />
    }

    return (
      <div>
        <Postform />
        {postContent}
      </div>
    )
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.post,

})

export default connect(mapStateToProps, { getPosts })(Posts);