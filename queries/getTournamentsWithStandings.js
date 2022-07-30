import { gql } from "@apollo/client";

export default gql`
  query TournamentQuery($slug: String, $page: Int!, $perPage: Int!) {
    tournament(slug: $slug) {
      events {
        name
        standings(query: { page: $page, perPage: $perPage }) {
          nodes {
            standing
            entrant {
              name
            }
          }
        }
      }
    }
  }
`;
