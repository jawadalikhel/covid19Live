import React from 'react';
import './style.css';

const Display = (props) => {
    return (
        <div className="quickFacts-container">
            <p className="case-num">{props.data.cases} <br/>Total Confirmed Cases </p>
            <p className="death-num">{props.data.deaths} <br/>Total Deceased</p>
            <p className="rec-num">{props.data.recovered}<br/>Total Recovered</p>
        </div>
    )
}
export default Display;