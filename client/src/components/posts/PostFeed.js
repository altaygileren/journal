import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { Grid, Row, Col } from 'react-bootstrap';


class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Grid>
          <Row>
            {posts.map(post => {
              return (
                <Col lg={3}>
                  <div className="postBox">
                    <h2 className="headline">{post.headline}</h2>
                    <p>By- {post.firstname}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Grid>
      </div>
    )
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
}


export default PostFeed;