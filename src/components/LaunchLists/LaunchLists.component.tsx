import React, {useState} from 'react';
import "./launch.css";

type propType = {
    smallHeading: string,
    largeHeading: string,
    image: string
}

const LaunchLists:React.FC<any> = ({smallHeading, largeHeading, image}) => {
    return (
        <div className="section__feature">
            <div className="background__image_launch" style={{backgroundImage: `url(${image})` }}>
            </div>
            <div className="heading__section">
                <div className="inner_area_heading">
                    <h3>{smallHeading}</h3>
                        <h2>{largeHeading}</h2>
                    <button className="btn">
                        Replay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LaunchLists;