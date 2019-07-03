/* eslint no-undef: "off" */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import Input from '../components/Input';
import theme from '../themes/theme';
import GlobalStyles from '../themes/GlobalStyles';

afterEach(cleanup);

const waitForNextTick = () => new Promise(resolve => setTimeout(resolve), 501);

const setup = (setSearchInput, value) => {
  const { container, rerender, getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Input setSearchInput={setSearchInput} value={value} />
      </>
    </ThemeProvider>,
  );

  const input = getByPlaceholderText('Search');

  return {
    input,
    container,
    rerender,
  };
};

describe('<Input>: Style snapshot tests', () => {
  it('should have correct styles', () => {
    const { container } = setup(jest.fn(), 'cats');
    expect(container).toMatchSnapshot();
  });
});

describe('<Input>: Unit tests', () => {
  it('should have the correct value after onChange', async () => {
    let value = 'cats';
    const setSearchInput = jest.fn((ev) => {
      value = ev;
    });

    const { input } = setup(setSearchInput, value);
    expect(value).toBe('cats');

    fireEvent.change(input, { target: { value: 'dogs' } });

    await waitForNextTick();

    expect(setSearchInput).toHaveBeenCalledTimes(1);
    expect(value).toBe('dogs');
  });
});
