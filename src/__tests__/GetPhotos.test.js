/* eslint no-undef: "off" */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MockLink } from 'apollo-link-mock';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/theme';
import GetPhotos from '../pages/GetPhotos';
import { GET_PHOTOS } from '../pages/queries';
import mockedResponse from './mocks/mockedResponse';

const waitForNextTick = () => new Promise(resolve => setTimeout(resolve), 300);

afterEach(cleanup);

const getPhotosMocks = ({ tags, data }) => {
  return [
    {
      request: {
        operationName: 'getPhotos',
        query: GET_PHOTOS,
        variables: { tags },
      },
      result: {
        data,
      },
    },
  ];
};

function createClient(mocks) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks),
  });
}

const renderWrapper = (mocks, props) => {
  const { tags } = props;

  const { getByText, container } = render(
    <ApolloProvider client={createClient(getPhotosMocks(mocks))}>
      <ApolloHooksProvider client={createClient(getPhotosMocks(mocks))}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GetPhotos tags={tags} />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>,
  );

  return { getByText, container };
};

// ---- INTEGRATION ---- //
describe('<GetPhotos />', () => {
  it('should render title and images correctly', async () => {
    const mocks = {
      tags: 'cats',
      ...mockedResponse,
    };

    const { container } = renderWrapper(mocks, { tags: 'cats' });
    await waitForNextTick();
    expect(container.querySelector('h1').textContent).toBe('Recent Uploads tagged cats');
    expect(container.querySelectorAll('img').length).toEqual(20);
    expect(container.querySelector('img')).toHaveAttribute('src');
  });
});
