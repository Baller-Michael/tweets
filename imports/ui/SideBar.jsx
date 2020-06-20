import React, { Component } from 'react';
import Follow from './Follow.jsx';
import Trends from './Trends.jsx';
import CopyRight from './CopyRight.jsx';

export default class SideBar extends Component {
    render() {
        return (
            <div className="side-bar">
                <Follow />
                <Trends />
                <CopyRight />
            </div>
        )
    }
}
