import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThumbnailImage from './ThumbnailImage';

export default function PhotoGallery(props) {
  const { items } = props;
  const imageCount = items.length;
  const imagesPerColumn = imageCount / 4;
  const newItemsArr = [...items];

  return (
    <Container>
      {[1, 2, 3, 4].map(i => (
        <Column key={`column${i}`}>
          {newItemsArr.splice(0, imagesPerColumn).map(item => (
            <ThumbnailImage
              key={`${item.author_id}_${item.date_taken}`}
              date={item.date_taken}
              src={item.media.m}
              author={item.author}
              link={item.link}
              title={item.title}
              tags={item.tags}
            />
          ))}
        </Column>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.4rem;
  margin-top: 0.8rem;
`;

const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 0.4rem;

  @media (max-width: 960px) {
    flex: 50%;
    max-width: 50%;
  }

  @media (max-width: 450px) {
    flex: 100%;
    max-width: 100%;
  }
`;

PhotoGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
