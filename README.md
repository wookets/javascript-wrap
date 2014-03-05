
Useful for wrapping functions (Aspect Oriented Programming) in javascript.

Original Credit:
http://stackoverflow.com/questions/5258829/wrapping-a-function-in-javascript-jquery


## Install

In package.json, under dependencies, you can do...

```"wrap": "https://github.com/wookets/javascript-wrap/0.1.0"```


## Usage

```
var wrap = require('wrap');

myFunc(message) {
  console.log('my func ' + message);
}

before(message) {
  console.log('before ' + message);
}

after(message) {
  console.log('after ' + message);
}

myFunc = wrap(myFunc, before, after);

myFunc('hewwoo');

// ouput:
// before hewwoo
// my func hewwoo
// after hewwoo

```
