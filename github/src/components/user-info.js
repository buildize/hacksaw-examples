import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from '../common';
import './user-info.css';

export default class UserInfo extends Component {
  render() {
    const { user, repos } = this.props;

    return (
      <div className="user-info">
        <Row>
          <Col md="1/4">
            <div className="pt-card pt-elevation-1">
              <p><img src={user.avatar_url} /></p>
              <h4>{user.name}</h4>
              <p><b>@{user.login}</b></p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Location:</b> {user.location}</p>
              <b>Company:</b> {user.company}
            </div>
          </Col>
          <Col md="3/4">
            <Row>
              {repos.map(repo => (
                <Col md="1/2">
                  <div className="pt-card pt-elevation-1">
                    <h5>{repo.name}</h5>
                    <p>{repo.description}</p>
                    <p><b>Stars:</b> {repo.stargazers_count}</p>
                    <a href={repo.html_url} target="_blank">Visit Repo</a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
