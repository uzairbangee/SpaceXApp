import React from "react";
import rocket from "./../../images/giphy.gif";
import './loading.css';

const Loading = () => {
    return (
        <div className="loading__area">
            <img src={rocket} style={{width: '100px'}}/>
        </div>
    );
}

export default Loading;