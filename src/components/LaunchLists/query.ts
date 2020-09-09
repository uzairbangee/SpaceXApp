import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST_FOR_HOME = gql`
    query LaunchList($limit: Int!) {
        launchesPast(limit: $limit) {
            id
            mission_name
            launch_year
            links {
                flickr_images
                video_link
            }
        }
    }
`;

export const QUERY_LAUNCH_LIST = gql`
    query LaunchAreaLists($limit: Int!) {
        launchesPast(limit: $limit) {
            id
            mission_name
            launch_site {
                site_name
            }
            launch_year
            links {
                flickr_images
            }
        }
    }
`;

export const LAUNCH_DETAILS = gql`
query LaunchDetail($id: ID!) {
    launch(id: $id) {
        details
        id
        mission_name
        launch_success
        launch_year
        launch_date_local
        launch_site {
            site_name_long
        }
        links {
            flickr_images
            article_link
            video_link
        }
        rocket {
            rocket_name
        }
    }
}
`;