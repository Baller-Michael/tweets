import React, { Component } from 'react';
import moment from 'moment';

export default class TweetComponent extends Component {
    constructor(props) {
        super(props)
        this.saveTweet = this.saveTweet.bind(this);
    }
    saveTweet(){
        console.log('savetweet')
    }
    render() {
        const { tweet: { created_at, text, user: { name, screen_name, profile_image_url_https } } } = this.props;
        return (
            <div className="user-tweet">
                <img src={profile_image_url_https} alt="" className="user-logo" />
                <div className="tweet-container">
                    <div className="tweet-header">
                        <h4 className="user-name">{name}</h4>
                        <h5 className="user-id">@{screen_name}</h5>
                        <h5 className="tweet-date">{moment(created_at).format('DD.MM.YYYY HH:m')}</h5>
                    </div>
                    <div className="tweet-body">
                        <p className="tweet-description">{text}</p>
                    </div>
                    <div className="tweet-action">
                        <div className="actions">
                            <div className="action"><img src="icons/comment.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/retweet.png" alt="" className="action-icon" /></div>
                            <div className="action" onClick={this.saveTweet}><img src="icons/like.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/message.png" alt="" className="action-icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
