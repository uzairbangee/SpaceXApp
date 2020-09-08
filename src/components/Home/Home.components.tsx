import React, {Fragment} from 'react';
import { useLaunchListQuery, LaunchListQuery } from '../../generated/graphql';
import LaunchLists from "./../LaunchLists/LaunchLists.component";
import { gql, useQuery } from '@apollo/client';

export const QUERY_LAUNCH_LIST_FOR_HOME = gql`
    query LaunchList($limit: Int!) {
        launchesPast(limit: $limit) {
            mission_name
            launch_year
            links {
                flickr_images
                video_link
            }
        }
    }
`;

const Home = () => {
    // const { data, error, loading } = useLaunchListQuery();
    const { loading, error, data } = useQuery<LaunchListQuery>(QUERY_LAUNCH_LIST_FOR_HOME, {
        variables: { limit: 5 },
    });
    if(loading)
        console.log('Loading');

    if(error)
        console.log(error);


    return (
        <Fragment>
            {
                data?.launchesPast?.map((launch, index) => (
                    launch?.links?.flickr_images && launch?.links?.flickr_images?.length > 0 &&
                    <LaunchLists smallHeading={launch?.launch_year} largeHeading={launch?.mission_name} image={launch?.links?.flickr_images[0]} key={index}/>
                ))
            }
        </Fragment>
    );
}

export default Home;