import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Tweet extends Component {
  render() {
    return (
      <li>{this.props.tweet.text}</li>
    );
  }
}