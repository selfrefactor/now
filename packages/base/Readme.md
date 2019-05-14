# Parcel-starter

## Usage

Run the commands from a project root directory(on brand new repo).

1. `git clone https://github.com/selfrefactor/parcel-starter.git`

2. `rm -rf  parcel-starter/.git&&cp -R ./parcel-starter/* .&&cp -R parcel-starter/.[^.]* .&&rm -rf parcel-starter`

3. Install with `yarn`

4. Start with `yarn start`

## Features

> Pair actions

```javascript
const pairHolder = {
  fn : (state, [ fooAction, barAction ]) => {
    console.log(fooAction, barAction)
    // Side effect can return new root state
    // ============================================
    // return {...state, fooStore: {}}

    // Can call pass
    // ============================================
    // return {}

    // Or it can return a new action
    // ============================================
    return fooInc()
  },
}

const pairSideEffect = producePair([
  {
    action : FOO_ROUTE_CHANGE,
    label  : 'foo',
  },
  {
    action : BAR_ROUTE_CHANGE,
    label  : 'bar',
  },
], pairHolder)
```
