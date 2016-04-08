# mofa [![NPM version](https://img.shields.io/npm/v/mofa.svg)](https://npmjs.com/package/mofa) [![NPM downloads](https://img.shields.io/npm/dm/mofa.svg)](https://npmjs.com/package/mofa) [![Build Status](https://img.shields.io/circleci/project/egoist/mofa/master.svg)](https://circleci.com/gh/egoist/mofa)

> My own helper library, like lodash but customized for me ;)

## Install

You can find it on NPM, but obviously not ready to use.

```bash
$ npm install --save mofa
```

## Usage

```js
import * as mofa from 'mofa'
import {someHelper} from 'mofa'

// make some magic with mofa
someHelper(obj)

// or without ES2015 module
const mofa = require('mofa')
const someHelper = require('mofa/some-helper')
```

## API

### hasEmptyField(obj)

Check if any property of an object's value is empty.

## Contributing

You are very welcome to add your code to this repo, make sure it is useful and well tested. Then follow this steps to make a PR:

- fork it and create a new branch
- name the branch with the feature or bug you will work on, like `feature/leftpad`
- hack the code
- write some unit tests, and run `npm test`
- push the updates to your forked one
- make a pull request

## License

MIT © [EGOIST](https://github.com/egoist)
