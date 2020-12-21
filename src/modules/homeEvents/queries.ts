import { gql } from '@apollo/client';

export const GET_HOME_EVENTS_QUERY = gql`
  query ($longitude: Float, $latitude: Float) {
    getHomeEvents (longitude: $longitude, latitude: $latitude) {
      cover,
      host_expanded { image_avatar },
      title,
      start,
      end,
      latitude,
      longitude,
      cost,
      currency
    }
  }
`;
