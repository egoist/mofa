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

## License

MIT © [EGOIST](https://github.com/egoist)
