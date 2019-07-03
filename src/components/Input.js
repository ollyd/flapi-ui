import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Input(props) {
  const { value, setSearchInput } = props;

  return (
    <InputGroup>
      <StyledInput type="text" placeholder="Search" value={value} onChange={e => setSearchInput(e.target.value)} />
      <Bar />
    </InputGroup>
  );
}

const InputGroup = styled.div`
  position: fixed;
  top: 15px;
  z-index: 2;
  margin-left: auto;
  right: 15rem;

  @media (max-width: 960px) {
    right: 5rem;
  }

  @media (max-width: 600px) {
    right: 0.8rem;
  }
`;

const StyledInput = styled.input`
  ${({ theme }) => `
    font-size: 1.8rem;
    font-weight: 300;
    color: ${theme.palette.secondary};
    padding: 0.8rem 0.8rem 0.8rem 0.4rem;
    display: block;
    width: 30rem;
    border: none;
    border-bottom: 1px solid ${theme.palette.secondary};
    background-color: ${theme.palette.primary};
    margin-left: auto;
    margin-top: 0.8rem;

    &:focus { outline: none; }

    @media (max-width: 600px) {
      width: 20rem;
    }
  `}
`;

const Bar = styled.span`
  ${({ theme }) => `
    position: relative;
    display: block;
    width: 30rem;

    &:before, &:after {
      content: '';
      height: 0.2rem;
      width: 0;
      bottom: 0.1rem;
      position: absolute;
      background: ${theme.palette.secondary};
      transition: 0.2s ease all;
    }
  `}
`;

Input.propTypes = {
  value: PropTypes.string,
  setSearchInput: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
};
