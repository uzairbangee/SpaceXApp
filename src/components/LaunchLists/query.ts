import { gql } from '@apollo/client';

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