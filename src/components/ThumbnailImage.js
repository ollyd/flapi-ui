import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { format } from 'date-fns';

export default function ThumbnailImage(props) {
  const [loaded, setLoaded] = useState(null);
  const {
    title, date, author, src, tags, link,
  } = props;

  const normaliseAuthor = () => {
    return author.split('("')[1].split('")')[0];
  };

  const stripSrc = () => {
    return src.split('https://live.staticflickr.com/')[1].split('.jpg')[0];
  };

  return (
    <Container>
      {loaded && <Header>{`Photo by: ${normaliseAuthor()}`}</Header>}
      <StyledLink to={{ pathname: `/${stripSrc()}`, state: { title, tags, link } }}><Img src={src} onLoad={() => setLoaded(true)} /></StyledLink>
      {loaded && <Footer>{format(date, 'DD/MM/YYYY')}</Footer>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 0.8rem;
  max-height: 250px;
  vertical-align: middle;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2), 0 0.6rem 20rem 0 rgba(0, 0, 0, 0.19);
`;

const headerAndFooter = css`
  ${({ theme }) => `
    position: absolute;
    z-index: 1;
    color: ${theme.text.color.contrast};
    font-size: 1.2rem;
    height: 4rem;
    width: 100%;
  `}
`;

const Header = styled.div`
  ${headerAndFooter}
  top: 0;
  background-image: linear-gradient(to bottom,#252525,#25252500);
  padding: 0.4rem 0.8rem;
  `;

const Footer = styled.div`
  ${headerAndFooter}
  bottom: 0;
  background-image: linear-gradient(to top,#252525,#25252500);
  padding: 2rem 0.8rem 0.4rem 0.8rem;
`;

ThumbnailImage.propTypes = {
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
