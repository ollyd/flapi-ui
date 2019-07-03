import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';
import Spinner from '../components/Spinner';
import Photos from './Photos';
import { GET_PHOTOS } from './queries';


export default function GetPhotos(props) {
  const { tags } = props;
  const { data, loading } = useQuery(GET_PHOTOS, {
    variables: { tags },
  });

  if (loading) {
    return <Spinner />;
  }

  const { getPhotos } = data;
  const { title, items } = getPhotos;

  return <Photos title={title} items={items} data-testid="photos" />;
}

GetPhotos.propTypes = {
  tags: PropTypes.string,
};

GetPhotos.defaultProps = {
  tags: '',
};
