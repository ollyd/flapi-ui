import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { useDebounce } from 'use-debounce';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';
import apolloClient from './utils/apolloClient';
import GetPhotos from './pages/GetPhotos';
import Photo from './pages/Photo';
import Navbar from './components/Navbar';
import Input from './components/Input';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [value] = useDebounce(searchInput, 500);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//embedr.flickr.com/assets/client-code.js';
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <>
              <Normalize />
              <GlobalStyles />
              <Navbar />
              <Input setSearchInput={setSearchInput} value={searchInput} />
              <Switch>
                <Route exact path="/" render={() => <GetPhotos tags={value} />} />
                <Route path="/:user/:photoId" component={Photo} />
              </Switch>
            </>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}
