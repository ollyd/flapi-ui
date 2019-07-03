import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export default function Spinner(props) {
  const {
    size, firstColor, secondColor, loading,
  } = props;
  const countBallsInLine = 3;

  const getBalls = () => {
    const balls = [];
    let keyValue = 0;
    for (let i = 0; i < countBallsInLine; i++) { // eslint-disable-line no-plusplus
      for (let j = 0; j < countBallsInLine; j++) { // eslint-disable-line
        balls.push(
          <Ball
            firstColor={firstColor}
            secondColor={secondColor}
            size={size}
            x={i * (size / 3 + size / 15)}
            y={j * (size / 3 + size / 15)}
            key={keyValue.toString()}
            index={keyValue}
          />,
        );
        keyValue++; // eslint-disable-line
      }
    }
    return balls;
  };

  return (
    loading && (
      <Container>
        <BallWrapper size={size}>
          {getBalls({
            countBallsInLine, firstColor, secondColor, size,
          })}
        </BallWrapper>
      </Container>
    )
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0
`;

const BallWrapper = styled.div`
  ${({ size }) => `
    position: relative;
    width: ${size}px;
    height: ${size}px;
    margin: 0 auto;
  `}
`;

const motion = ({ secondColor }) => keyframes`
  50% {
    transform: scale(0);
    background-color: ${secondColor};
  }
`;

const Ball = styled.div`
  ${({
    size, y, x, firstColor, index,
  }) => `
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    width: ${size / 5}px;
    height: ${size / 5}px;
    border-radius: 3px;
    background-color: ${firstColor};
    animation: ${motion} 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: ${index * 0.1}s;
  `}
`;

Spinner.defaultProps = {
  loading: true,
  size: 30,
  firstColor: '#1E75BC',
  secondColor: '#fff',
};

Spinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
};
