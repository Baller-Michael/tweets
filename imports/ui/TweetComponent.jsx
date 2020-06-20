import React, { Component } from 'react'

export default class TweetComponent extends Component {
    render() {
        return (
            <div className="user-tweet">
                <img src="user-small-logo.png" alt="" className="user-logo" />
                <div className="tweet-container">
                    <div className="tweet-header">
                        <h4 className="user-name">Benoît Vrins</h4>
                        <h5 className="user-id">@Exibit</h5>
                        <h5 className="tweet-date">26 janv.</h5>
                    </div>
                    <div className="tweet-body">
                        <p className="tweet-description">I just published “The Belgian Red Cross website : backstage of a revamp like no other”</p>
                    </div>
                    <div className="tweet-action">
                        <div className="actions">
                            <div className="action"><img src="icons/comment.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/retweet.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/like.png" alt="" className="action-icon" /></div>
                            <div className="action"><img src="icons/message.png" alt="" className="action-icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
