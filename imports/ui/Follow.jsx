import React, { Component } from 'react'

export default class Follow extends Component {
    render() {
        return (
            <div className="follow-container">
                <div className="follow-heading">
                    <h3 className="title">Who to follow</h3>
                    <a className="refresh">Refresh</a>
                    <a className="view-all">View all</a>
                </div>
                <div className="recommended-person">
                    <div className="close">x</div>
                    <img src="followers-icon.png" alt="" />
                    <div className="recommended-person-body">
                        <div className="person-info">
                            <h4 className="recommended-person-name">Spade</h4>
                            <h5 className="recommended-person-id">@spade</h5>
                        </div>
                        <button className="follow-recommended-person">Follow</button>
                    </div>
                </div>
                <div className="recommended-person">
                    <div className="close">x</div>
                    <img src="followers-icon.png" alt="" />
                    <div className="recommended-person-body">
                        <div className="person-info">
                            <h4 className="recommended-person-name">Spade</h4>
                            <h5 className="recommended-person-id">@spade</h5>
                        </div>
                        <button className="follow-recommended-person">Follow</button>
                    </div>
                </div>
                <div className="recommended-person">
                    <div className="close">x</div>
                    <img src="followers-icon.png" alt="" />
                    <div className="recommended-person-body">
                        <div className="person-info">
                            <h4 className="recommended-person-name">Spade</h4>
                            <h5 className="recommended-person-id">@spade</h5>
                        </div>
                        <button className="follow-recommended-person">Follow</button>
                    </div>
                </div>
                <div className="find-friends">
                    <img src="find-friends.png" className="find-friends-img" alt=""/>
                    <a>Find friends</a>
                </div>
            </div>
        )
    }
}
