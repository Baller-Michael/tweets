import React, { Component } from 'react';

export default class Statistic extends Component {

    render() {
        const profileStats = [
            {
                title: 'Tweets',
                amount: '3931'
            },
            {
                title: 'Following',
                amount: '654'
            },
            {
                title: 'Followers',
                amount: '387'
            },
            {
                title: 'Favorites',
                amount: '265'
            },
            {
                title: 'Lists',
                amount: '8'
            }, 
            {
                title: 'Moments',
                amount: '0'
            }
        ];
        return (
            <div className="statistic">

                <img src="banner.png" alt="" className="banner" />
                <div className="container">
                    <div className="sub-header">

                        <img src="avatar.png" alt="" className="avatar" />
                        <div className="stats">
                            {profileStats.map(stat => {
                                return <div className="stat" key={stat.title}>
                                    <h2 className="stat-title">{stat.title}</h2>
                                    <p className="stat-amount">{stat.amount}</p>
                                </div>
                            })}
                        </div>
                        <button className="follow">Follow</button>
                    </div>
                </div>
            </div>
        )
    }
}