# Rx-starter

Typescript, Webpack, React, Redux-observable boilerplate

## Usage

Run the commands from a project root directory.

1. `git clone https://github.com/selfrefactor/rx-starter.git`

2. `rm -rf  rx-starter/.git&&cp -R ./rx-starter/* .&&cp -R rx-starter/.[^.]* .&&rm -rf rx-starter`

3. Install with `yarn install`

4. Run `yarn rename foo` to rename your project from `rx-starter` to `foo`

## Add component/modules/epics CLI helper

- run `yarn do` and make your selection

## Commands

- `node files/watch` to start the watcher process.

- `yarn start` to start the webpack dev server.

- `yarn run build` to build files for production.

- `yarn test` to run unit tests

- `yarn e2e` to run end-to-end tests(All e2e tests must be named `e2e.spec.ts`)

## Changing route

```javascript
import { push } from 'react-router-redux'

...
this.props.dispatch(push('/foo'))
...

```