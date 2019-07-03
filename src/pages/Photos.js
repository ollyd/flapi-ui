import React from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import PhotoGallery from '../components/PhotoGallery';

export default function Photos(props) {
  const { title, items } = props;

  return (
    <>
      <Title title={title} />
      <PhotoGallery items={items} />
    </>
  );
}

Photos.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
