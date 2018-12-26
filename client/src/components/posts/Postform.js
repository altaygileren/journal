import React, { Component } from 'react'
import PropTypes from 'prop-types';  
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: '',
      body: '',
      firstname: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      })
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      headline: this.state.headline,
      body: this.state.body,
      firstname: user.firstname
    }
    this.props.addPost(newPost);
    this.setState({
      headline: '',
      body: '',
      firstname: ''
    })
    this.props.history.push('/feed');
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="postFormInput">
        <form onSubmit={this.onSubmit}>
          <input
            className={classnames('userFormInput', {
              'errorForm': errors.headline
            })}
            type="text"
            placeholder="Headline"
            name="headline"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.headline && (<div className="errorIssue">{errors.headline}</div>)}
          <br />
          <textarea
            className={classnames('userFormInput', {
              'errorForm': errors.body
            })}
            type="text"
            placeholder="Story"
            name="body"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.body && (<div className="errorIssue">{errors.body}</div>)}
          <br />
          <button className="userFormInputBtn">Post</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps, { addPost })(withRouter(Postform));