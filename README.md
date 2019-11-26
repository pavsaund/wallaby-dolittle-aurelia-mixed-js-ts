## Wallaby mixed TS / JS using Dolittle
This is a test / example project to recreate a bug scenario when running wallaby and the project contains a mix of TypeScript and JavaScript files. The example is based on a [Dolittle interaction template for TypeScript and Aurelia](https://github.com/dolittle-boilerplates/Interaction.Web.TS.Aurelia).

### Recreating the failing test scenario

- Run `yarn` to install dependencies
- Select a wallaby configuration for the project (both have the same behaviour)
  - `wallaby.config.dolittle.js`: Configuration based on environment and dolittle toolings
  - `wallaby.config.plain.js`: Normalised version of what the dolittle tooling creates with just the output config.
- Open Wallaby.Console output in VSCode and confirm following error:
```sh
[Error] Runtime error: ./Features/external-dependency.js:1 
[Error] export const stringish = (x) => x.toString(); 
[Error] ^^^^^^ 
[Error] SyntaxError: Unexpected token export 
[Error]     at Module._compile (internal/modules/cjs/loader.js:718:23) 
[Error]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10) 
[Error]     at Module.load (internal/modules/cjs/loader.js:641:32) 
[Error]     at Function.Module._load (internal/modules/cjs/loader.js:556:12) 
[Error]     at Module.require (internal/modules/cjs/loader.js:681:19) 
[Error]     at require (internal/modules/cjs/helpers.js:16:16) 
[Error]     at Object.<anonymous> (./Features/something.js:4:45) 
[Error]     at Module._compile (internal/modules/cjs/loader.js:774:30) 
[Error]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10) 
[Error]     at Module.load (internal/modules/cjs/loader.js:641:32) 
[Error]     at Function.Module._load (internal/modules/cjs/loader.js:556:12) 
[Error]     at Module.require (internal/modules/cjs/loader.js:681:19) 
[Error]     at require (internal/modules/cjs/helpers.js:16:16) 
[Error]     at Object.<anonymous> (./Features/for_something/given/a_context.js:3:21) 
[Error]     at Module._compile (internal/modules/cjs/loader.js:774:30) 
[Error]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10) 
[Error]     at Module.load (internal/modules/cjs/loader.js:641:32) 
[Error]     at Function.Module._load (internal/modules/cjs/loader.js:556:12) 
[Error]     at Module.require (internal/modules/cjs/loader.js:681:19) 
[Error]     at require (internal/modules/cjs/helpers.js:16:16) 
[Error]     at Object.<anonymous> (./Features/for_something/when_doing_something.js:4:35) 
[Error]     at Module._compile (internal/modules/cjs/loader.js:774:30) 
[Error]     at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10) 
[Error]     at Module.load (internal/modules/cjs/loader.js:641:32) 
[Error]     at Function.Module._load (internal/modules/cjs/loader.js:556:12) 
[Error]     at Module.require (internal/modules/cjs/loader.js:681:19) 
[Error]     at require (internal/modules/cjs/helpers.js:16:16) 
[Error]     at ./node_modules/mocha/lib/mocha.js:334:36 
[Error]     at Array.forEach (<anonymous>) 
[Error]     at Mocha.loadFiles (./node_modules/mocha/lib/mocha.js:331:14) 
[Error]     at Mocha.run (./node_modules/mocha/lib/mocha.js:809:10) 
[Error]     at WebSocket.emit (events.js:200:13) 
```

#### Verify TS only mode
To verify a working configuration, rename `Features\external-dependency.*js*` to `Features\external-dependency.*ts*`

#### Babel compiler
A default babel configuration based on dolittle tooling is available for testing with the `wallaby.compilers.babel()` compiler option. Can be manually setup in either the `dolittle` or `plain` config files. Mixing the babel and typescript compilers hasn't yielded the desired outcome.

Used the `wallaby.config.plain.mixed-compiler.js` as the configuration file to test out how this fails. Hint: `"Allocation failed - JavaScript heap out of memory"`

### Running the project
Instructions to build and run the project
- run `yarn` to install dependencies
- run `yarn start`to start the project
- navigate to http://localhost:8080