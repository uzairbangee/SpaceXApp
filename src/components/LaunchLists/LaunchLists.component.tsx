import React from 'react';
import "./launch.css";
import {Link} from 'react-router-dom';

type propType = {
    smallHeading: string,
    largeHeading: string,
    image: string,
    btnTitle: string,
    align: string,
    link: string,
    path: string
}

const LaunchLists:React.FC<any> = ({smallHeading, largeHeading, image, btnTitle, align, link, path}) => {
    return (
        <div className="section__feature">
            <div className="background__image_launch" style={{backgroundImage: `url(${image})` }}>
            </div>
            <div className="heading__section">
                <div className={`inner_area_heading_${align}`}>
                    <h3>{smallHeading}</h3>
                        <h2>{largeHeading}</h2>
                        {
                            link
                            ?
                                <Link to={path}>
                                    <button className="btn">
                                        {btnTitle}
                                    </button>
                                </Link>
                            :
                            <button className="btn">
                                        {btnTitle}
                                    </button>
                        }
                </div>
            </div>
        </div>
    );
}

export default LaunchLists;