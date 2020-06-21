import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Tweets } from '../api/tweets.js';

export default class TweetComponent extends Component {
    constructor(props) {
        super(props)
        this.saveTweet = this.saveTweet.bind(this);
        this.deleteTweet = this.deleteTweet.bind(this);
    }
    saveTweet() {
        const { tweet } = this.props;
        Meteor.call('saveTweet', tweet);
        // Tweets.insert({ created_at, _id: id, text, name, screen_name, profile_image_url_https });
        console.log(Tweets.find({}).fetch())
    }
    deleteTweet() {
        const { tweet: { id } } = this.props;
        Meteor.call('consolePP');
    }
    render() {
        const { tweet: { created_at, id, text, user: { name, screen_name, profile_image_url_https } } } = this.props;
        return (
            <div className="user-tweet" key={id}>
                <img src={profile_image_url_https && profile_image_url_https} alt="" className="user-logo" />
                <div className="tweet-container">
                    <div className="tweet-header">
                        <h4 className="user-name">{name && name}</h4>
                        <h5 className="user-id">@{screen_name && screen_name}</h5>
                        <h5 className="tweet-date">{created_at && moment(created_at).format('DD.MM.YYYY HH:m')}</h5>
                    </div>
                    <div className="tweet-body">
                        <p className="tweet-description">{text}</p>
                    </div>
                    <div className="tweet-action">
                        <div className="actions">
                            <div className="action"><img src="icons/comment.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/retweet.png" alt="" className="action-icon" /></div>
                            <div className="action" onClick={this.saveTweet}><img src="icons/like.png" alt="" className="action-icon" /></div>
                            <div className="action" onClick={this.deleteTweet}><img src="icons/message.png" alt="" className="action-icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
