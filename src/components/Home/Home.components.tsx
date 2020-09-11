import React, {Fragment, useRef, useEffect, Suspense} from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import { useQuery } from '@apollo/client';
import Loading from './../Loading/Loading.component';
import {QUERY_LAUNCH_LIST_FOR_HOME} from './../LaunchLists/query';

const LaunchLists = React.lazy(() => import("./../LaunchLists/LaunchLists.component"));

const Home = () => {
    const scrollDiv = useRef<HTMLSpanElement>(null);

    const { loading, error, data } = useQuery<LaunchListQuery>(QUERY_LAUNCH_LIST_FOR_HOME, {
        variables: { limit: 5 },
    });

    const scrollUp = () => {
        if(scrollDiv?.current?.scrollTop) scrollDiv.current.scrollTop = 0;
    }

    useEffect(() => {
        scrollUp();
    }, [])
    
    if(loading)
        return <Loading/>;

    if(error)
        console.log(error);


    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
                <span ref={scrollDiv}>
                    {
                        data?.launchesPast?.map((launch, index) => (
                            launch?.links?.flickr_images && launch?.links?.flickr_images?.length > 0 &&
                            <LaunchLists 
                                smallHeading={`Launch ${launch?.launch_year}`} 
                                largeHeading={launch?.mission_name} 
                                image={launch?.links?.flickr_images[0]} 
                                btnTitle={'Replay'} 
                                align={index % 2 === 0 ? 'right' : 'left' }
                                link={false}
                                path={launch?.links?.video_link}
                                key={index}
                            />
                        ))
                    }
                </span>
            </Suspense>
        </Fragment>
    );
}

export default Home;