# Documentation
This project is a boiler plate react app ready to be used for any react app projects.

## How to install?
`npm install`

## How to Start?
`npm start`

## Where does it start?
[https://localhost:9000/](https://localhost:9000/)


### Font Awesome Icons in React
Use the following NPM modules:

    "@fortawesome/fontawesome-svg-core": "^1.2.29",
    "@fortawesome/free-solid-svg-icons": "^5.13.1",
    "@fortawesome/react-fontawesome": "^0.1.11",


### Babel config:

### Babel NPM Modules:
The following are the modules of babel that need to be injected in the devdependencies:

    "@babel/cli": "^7.8.3",
    "@babel/core": "^7.8.3",
    "@babel/preset-env": "^7.8.3",
    "@babel/preset-react": "^7.8.3",
    "babel-eslint": "^10.0.3",
    "babel-loader": "^8.0.6",
    "babel-plugin-module-resolver": "^4.0.0",

@babel-eslint: Misght affect the ESLint configured. Take care of using this. Can be dropped. to be investigated.

#### Error : 'Regenerator runtime undefined'
Usage of Async/Await syntax sugar is possible with the usage of Regenerator runtimes.
Prior to Babel 7.4.0, @bable/polyfill included the runtimes:  [regenerator runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js)  and  [core-js](https://github.com/zloirock/core-js)

However, now the polyfill proposals are being removed in @babel/polyfill and `@babel/polyfill` package has been deprecated
In order to enable Async/Await the following needs to be done:
1. There is no need of @babel/polyfill
2. Install the following:

    npm i --save-dev @babel/plugin-transform-runtime 
    npm i @babel/runtime // runtime babel helpers + just regenerator runtime
    // OR (choose one!)
    npm i @babel/runtime-corejs3 
    // also contains other JS polyfills (not only regenerator runtime)
    // depends on core-js-pure ("ponyfills"/polyfills that don't pollute global scope)

Then include the following in `.bablerc` 

    "plugins": [
    [
        "@babel/plugin-transform-runtime",
        {
        "regenerator": true,
        "corejs": 3
        }
    ]
    ]


#### Learnings:
During development, if yiu need to make changes to Babel configurations using the webpack-dev-server's hot reload the changes donot take into effect. Restart the server for the fixes to take into effect.

#### Use Class Fields proposal
1. Use the `@babel/plugin-proposal-class-properties` inorder to use the Class Fields proposal (Example: ES6 arraor functions)

    npm install --save-dev @babel/plugin-proposal-class-properties

2. Inject the proposal in the babel plugins section:

    "plugins": [
      "@babel/plugin-proposal-class-properties",
      ...
    ]

[StackOverFlow Answer](https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined)

### Testing:
Jest Testing examples can be found in project react-testing.

#### Assertions using expect:
[Jest Expect examples](https://www.w3resource.com/jest/expect.php)
[Jest Mock](https://jestjs.io/docs/en/mock-functions)

### Modules used:
- Babel7
- Webpack4
- React16

### TODO::
 To add more documentation...

Tasks to be closed today:
How to run the bundle ? -> Anand
Understand Minification and inject that...
Concept of Loaders -> babel?webpack?
babel -> api docs
React View -> Handler -> Action -> Reducer -> Store -> React View ...
redux snippets
    Entity: {key:value}
    EntityList: [Entity]
Redux
ReduxThunk:
    React View -> Handler -> Action -> Middleware -> Dispatcher -> Reducer -> Store -> React View ...
redux Promise
    React View -> Handler -> Action -> Middleware -> Dispatcher -> Reducer -> Store -> React View ...

use babel-node for npm run build??


Learning/Notes:
`webpack-dev-server --mode development  --config webpack.config.dev.js --hot` has a dependency on the contents of the `dist` folder. Hence, make sure the contents are there or if you are running it for first time, make sure you run `npm run build` before you run `npm start`.
Use `file-loader` for loading images.
