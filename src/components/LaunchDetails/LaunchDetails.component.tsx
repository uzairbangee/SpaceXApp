import React, {Fragment} from 'react'
import { LaunchDetailQuery } from '../../generated/graphql';
import LaunchLists from "./../LaunchLists/LaunchLists.component";
import { useQuery } from '@apollo/client';
import {LAUNCH_DETAILS} from './../LaunchLists/query';
import {useParams} from "react-router-dom";
import Loading from '../Loading/Loading.component';

const LaunchDetails = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery<LaunchDetailQuery>(LAUNCH_DETAILS, {
        variables: { id: id },
    });
    
    if(loading)
        return <Loading/>;

    if(error)
        console.log(error);

    return (
        <Fragment>
            
            <LaunchLists
                smallHeading={'Launch Mission'} 
                largeHeading={data?.launch?.mission_name} 
                image={data?.launch?.links?.flickr_images && data?.launch?.links?.flickr_images?.length > 0 && data?.launch?.links?.flickr_images[0]} 
                btnTitle={'Video'}
                align={'center'}
                link={false}
                path={data?.launch?.links?.video_link}
            />
            <div className="launch__description">
                <p className="text_description">{data?.launch?.details}</p>
            </div>

            <div className="rocket__area">
                <h3 className="sidebar_text">Rocket Used:</h3>
                <h2>{data?.launch?.rocket?.rocket_name}</h2>
            </div>

            <div className="launch__info">
                <h3 className="sidebar_text">More About Launch</h3>
                <table className="table__info">
                    <tbody>
                        <tr>
                            <td>Launch Site</td>
                            <td>{data?.launch?.launch_site?.site_name_long}</td>
                        </tr>
                        <tr>
                            <td>Launch Date</td>
                            <td>{data?.launch?.launch_date_local}</td>
                        </tr>
                        <tr>
                            <td>Launch Year</td>
                            <td>{data?.launch?.launch_year}</td>
                        </tr>
                        <tr>
                            <td>Launch Status</td>
                            <td>{data?.launch?.launch_success ? 'Success' : "Fail"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default LaunchDetails;
