import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TweetComponent from './TweetComponent.jsx';

export default class TweetsTab extends Component {
    constructor(props) {
        super(props)
        this.state = { userId: '' }
        this.getTwitterId = this.getTwitterId.bind(this);
        this.sendUserId = this.sendUserId.bind(this);
    }
    getTwitterId() {
        this.setState({ userId: event.target.value });
    }
    sendUserId(event) {
        event.preventDefault();
        console.log('this.state.userId', this.state.userId)
    }
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
            <div className="tweet-components">
                <form onSubmit={this.sendUserId} className="send-id">
                    <input type="text" value={this.state.userId} onChange={this.getTwitterId} placeholder="Enter user id" className="search-tweets" />
                    <input type="submit" className="search-btn" value="Search User tweets"/>
                </form>
                <div className="tweet-tabs">
                    <a href="">Tweets</a>
                    <a href="">Tweets &amp; replies</a>
                    <a href="">Media</a>
                </div>
                <TweetComponent />

            </div>
        )
    }
}
