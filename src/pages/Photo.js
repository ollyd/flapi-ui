import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../components/Title';

export default function Photo(props) {
  const { match, location } = props;
  const { params } = match;
  const { user, photoId } = params;
  const { state } = location;
  const { title, tags, link } = state;
  const tagsArr = tags.split(' ');

  return (
    <>
      <Title title={title} />
      <ImgContainer>
        <a data-flickr-embed="true" href={link}><img height="540" width="540" src={`https://live.staticflickr.com/${user}/${photoId}.jpg`} alt={title} /></a>
      </ImgContainer>
      <Tags>
        {tagsArr[0] !== '' ? (
          tagsArr.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))
        ) : (
          <Tag>No tags</Tag>
        )}
      </Tags>
    </>
  );
}

const ImgContainer = styled.div`
  ${({ theme }) => `
    padding: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
    background-color: ${theme.palette.contrast};
  `}
`;

const Tags = styled.div`;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  justify-content: center;
`;

const Tag = styled.span`
  ${({ theme }) => `
    display: block;
    padding: 0.8rem;
    margin: 0.8rem;
    height: 3.2rem;
    line-height: 1.7rem;
    border-radius: 3px;
    font-weight: 300;
    background-color: ${theme.palette.secondary};
    color: ${theme.text.color.contrast};
  `}
`;

Photo.propTypes = {
  title: PropTypes.string,
};

Photo.defaultProps = {
  title: 'No Title Provided',
};
