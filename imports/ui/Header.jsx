import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav>
                        <div className="navigation">
                            <a href="">Home</a>
                            <a href="">Notifications</a>
                            <a href="">Messages</a>
                        </div>
                        <img src="logo-twitter.png" alt="" className="twitter-logo"/>
                        <div className="registration-form">
                            <input type="text" name="search" className="search" placeholder="Search on Twitter" />
                            <img src="user-small-logo.png" alt="" className="user-logo" />
                            <button className="tweet-btn">Tweet</button>
                        </div>
                    </nav>
                </div>
            </header >
        )
    }
}