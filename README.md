fs Then
=======

[![Build Status](https://travis-ci.org/node-then/fs-then.png)](https://travis-ci.org/node-then/fs-then)

Thin wrapper arround Node's fs module that makes the async functions promise
aware. The wrapped methods return a promise the represents the value of the
async operation. Traditional callbacks still work, allowing for a transparent
drop-in for fs. Sync methods, classes and other helpers are not modified.


Example
-------

Traditional Callback

```javascript
var fs = require('fs');
fs.readFile('path to file', function (err, buffer) {
   ...
});
```

With Promises

```javascript
var fs = require('fs-then');
fs.readFile('path to file').then(
   function (buffer) { ... },
   function (err) { ... }
);
```


Wrapped methods
---------------

- appendFile
- chmod
- chown
- close
- exists
- fchmod
- fchown
- fdatasync
- fstat
- fsync
- ftruncate
- futimes
- lchmod
- lchown
- link
- lstat
- mkdir
- open
- read
- readFile
- readdir
- readlink
- realpath
- rename
- rmdir
- stat
- symlink
- truncate
- unlink
- utimes
- write
- writeFile
