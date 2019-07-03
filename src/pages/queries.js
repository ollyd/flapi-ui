import gql from 'graphql-tag';

const GET_PHOTOS = gql`
  query getPhotos($tags: String) {
    getPhotos(tags: $tags) {
      title
      link
      description
      modified
      items {
        title
        media {
          m
        }
        date_taken
        author
        author_id
        tags
        link
      }
    }
  }
`;

export { GET_PHOTOS };
