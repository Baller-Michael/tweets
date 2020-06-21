import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TweetComponent from './TweetComponent.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { Tweets } from '../api/tweets';

class TweetsTab extends Component {
    constructor(props) {
        super(props)
        this.state = { userId: '', showSavedTweets: false }
        this.getTwitterId = this.getTwitterId.bind(this);
        this.sendUserId = this.sendUserId.bind(this);
    }
    getTwitterId() {
        this.setState({ userId: event.target.value });
    }
    sendUserId(event) {
        event.preventDefault();
        Meteor.call('postTweet', { userId: this.state.userId }, (err, tweets) => {
            if (err) {
                console.log('Error', err);
            } else {
                this.setState({ tweets: tweets })
            }
        })
    }
    render() {
        const { tweets, showSavedTweets } = this.state;
        const { savedTweets } = this.props;
        console.log('savedTweets', savedTweets)
        return (
            <div className="tweet-components">
                <form onSubmit={this.sendUserId} className="send-id">
                    <input type="text" value={this.state.userId} onChange={this.getTwitterId} placeholder="Enter user id" className="search-tweets" />
                    <input type="submit" className="search-btn" value="Search User tweets" />
                </form>
                <div className="tweet-tabs">
                    <a href="" onClick={() => { event.preventDefault(); this.setState({ showSavedTweets: false }) }}>Tweets</a>
                    <a href="" onClick={() => { event.preventDefault(); this.setState({ showSavedTweets: true }) }}>Saved Tweets</a>
                </div>
                {(tweets && !showSavedTweets) && tweets.map(tweet => <TweetComponent tweet={tweet} key={tweet.id} />)}
                {showSavedTweets && savedTweets.map(tweet => <TweetComponent tweet={tweet.tweet} key={tweet._id} />)}
            </div >
        )
    }
}
export default withTracker(() => {
    return {
        savedTweets: Tweets.find({}).fetch(),
    };
})(TweetsTab);
