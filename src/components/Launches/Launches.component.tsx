import React, {Fragment, Suspense} from 'react';
import { LaunchAreaListsQuery } from '../../generated/graphql';
import { gql, useQuery } from '@apollo/client';
import {QUERY_LAUNCH_LIST} from './../LaunchLists/query';
import Loading from '../Loading/Loading.component';

const LaunchLists = React.lazy(() => import("./../LaunchLists/LaunchLists.component"));

const Launches = () => {
    const { loading, error, data } = useQuery<LaunchAreaListsQuery>(QUERY_LAUNCH_LIST, {
        variables: { limit: 10 },
    });
    
    if(loading)
        return <Loading/>;

    if(error)
        console.log(error);


    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
            {
                data?.launchesPast?.map((launch, index) => (
                    launch?.links?.flickr_images && launch?.links?.flickr_images?.length > 0 &&
                    <LaunchLists 
                        smallHeading={`${launch.launch_site?.site_name}`} 
                        largeHeading={launch?.mission_name} 
                        image={launch?.links?.flickr_images[0]} 
                        btnTitle={'Details'}
                        link={true}
                        path={`/launch/${launch?.id}`}
                        align={index % 2 === 0 ? 'right' : 'left' }
                        key={index}
                    />
                ))
            }
            </Suspense>
        </Fragment>
    );
}

export default Launches;