import React, { Component } from 'react'

export default class Trends extends Component {
    render() {
        const trends = ['SportInfoDay', 'womenleaders', 'VisitesDomiciliaires', 'European Parliament',
            'blindgetrouwd', 'UXDesign', 'UIDesign', 'CleanAirNow'];
        return (
            <div className="trends">
                <div className="trends-heading">
                    <h4 className="title">Trends</h4>
                    <a href="" className="change">Change</a>
                </div>
                <ul className="hasteg-trends">
                    {trends.map(trend => <li className="trend" key={trend}>#{trend}</li>)}
                </ul>
            </div>
        )
    }
}
