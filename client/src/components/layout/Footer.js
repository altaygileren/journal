import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Col lg={4}>
            <h3>Built with</h3>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Redux</li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3>Contact</h3>
            <ul>
              <li>Email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Portfolio</li>
            </ul>
          </Col>
          <Col lg={4}>
            <h3>Random list</h3>
            <ul>
              <li>Blah</li>
              <li>Blah</li>
              <li>Blah</li>
            </ul>
          </Col>
        </Grid>
      </div>
    )
  }
}
