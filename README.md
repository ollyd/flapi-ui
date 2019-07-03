### Flapi-UI

A simple UI layer for a web application which hits the Flickr public API to retrieve photos. A Node backend is required for this project which can be found [here](https://github.com/ollyd/flapi-bff).

You can test out a live demo version of the app [here](http://oilymutton-flapi-ui.s3-website-ap-southeast-2.amazonaws.com/). 
Note: the first time you hit the backend it will take a few seconds. This is because it's hosted on Heroku and it needs some time for the dyno to fire up. Subsequent hits will be much faster.

### Tech

It uses React, Apollo, GraphQL and Styled Components.

Eslint for linting, which runs on a pre-commit hook.

React Testing Library, Jest, Jest Styled Components for testing, which also runs pre-commit.

### Installation

Clone this repo.
```sh
$ yarn install
$ yarn dev
```

For a production build:

```sh
$ yarn build
```


### Todo

Lots to do still!...

| Field | Task |
| ------ | ------ |
| UI | Disable Search when on individual Photo page as it's redundant. |
| UI | Add filtering and addition search params to GraphQL query. |
| UI | Fix the jump in image size on the individual Photo page. |
| UI | Add logic to hit a photo directly with a url. |
| Errors | Add Error Boundaries and better GraphQL error handling |
| Optimisation | The bundle is a bit large around 500kb. Would implement gzip compression, and potentially code splitting.  |
| Testing | I have only provided an example style, unit and integration tests. Coverage is extremely thin. |
| Security | Would add https for production |

### Considerations

| Field | Task |
| ------ | ------ |
| UI | Potentially smaller thumbnail images to reduce blur. |
| UI | Perhaps scrap the masonry thumbnail effect with uniform sizes. |
