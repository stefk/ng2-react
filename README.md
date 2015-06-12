Angular / Typescript
====================

Install definitions
-------------------

npm install -g tsd
tsd query angular2 --action install

Compile to es5
--------------

npm install -g typescript@^1.5.0-beta
tsc -m commonjs -t es5 --emitDecoratorMetadata src/angular/ts/components/player.ts

(use --watch to observe changes)

React
=====

With react tools
----------------

npm install -g react-tools
jsx -x jsx src/react/components/ src/react/components/build

(use --watch to observe changes)

With webpack / Babel
--------------------

node_modules/.bin/webpack

(use --watch to observe changes

Or:

