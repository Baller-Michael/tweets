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
class App extends Component {
    getTweets() {
        Meteor.call('postTweet', (err, res) => {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Success', res);
                // this.result.set(res);
            }
        })
        // return this.props.tweets.map((tweet) => (
        //     <Tweet key={tweet._id} tweet={tweet} />
        // ));
    }


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
                <ul>
                    {this.getTweets()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        tweets: Tweets.find({}).fetch(),
    };
})(App);