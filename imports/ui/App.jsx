import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import '../styles/app.scss';

import { Tweets } from '../api/tweets.js';

import Tweet from './Tweet.jsx';
import Header from './Header.jsx';
import Statistic from './Statistic.jsx';
import Profile from './Profile.jsx';
import SideBar from './SideBar.jsx';
import TweetsTab from './TweetsTab.jsx';

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Statistic />
                <div className="page">
                    <div className="container">
                        <Profile />
                        <TweetsTab />
                        <SideBar />
                    </div>
                </div>
            </div>
        );
    }
}