import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: '',
      body: '',
      errors: {}
    }

  }

  render() {

    return (
      <div>
        <form>
        <input type="text" name="headline" placeholder="Headline" />
        <input type="text" name="body" placeholder="Story" />
        </form>
      </div>
    )
  }
}

export default Postform;