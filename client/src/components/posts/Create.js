import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Postform from './Postform';
import { getPosts } from '../../actions/postActions';
import { Grid, Row, Col } from 'react-bootstrap';

class Create extends Component {
  render() {
    return (
      <div className="writeBlogDiv">
        <Grid>
          <Postform />
        </Grid>
      </div>
    )
  }
}

Create.propTypes = {
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, {})(Create);