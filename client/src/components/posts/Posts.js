import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Postform from './Postform';

class Posts extends Component {
  render() {
    return (
      <div>
        <Postform />
      </div>
    )
  }
}


export default Posts;