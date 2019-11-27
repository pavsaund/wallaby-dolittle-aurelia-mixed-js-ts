
module.exports = function (wallaby) {
    process.env.WALLABY = "true";
    return {
        files: [
            { pattern: 'wwwroot/**/*', ignore: true },
            { pattern: 'Configurations/**/*', ignore: true },
            { pattern: 'Scripts/**/*', ignore: true },
            { pattern: 'node_modules/!(chai|chai-as-promised|sinon|sinon-chai)', ignore: true },
            { pattern: 'node_modules/@dolittle/!(typescript.build)', ignore: true },
            { pattern: 'package.json', instrument: false },
            { pattern: 'node_modules/chai', instrument: false },
            { pattern: 'node_modules/chai-as-promised', instrument: false },
            { pattern: 'node_modules/sinon', instrument: false },
            { pattern: 'node_modules/sinon-chai', instrument: false },
            { pattern: 'node_modules/@dolittle/typescript.build', instrument: false },
            { pattern: 'Distribution/**/*', ignore: true },
            { pattern: '/**/for_*/**/!(given)/*.@(ts|js)', ignore: true },
            { pattern: '/**/for_*/*.@(ts|js)', ignore: true },
            { pattern: '/**/for_*/**/given/*.@(ts|js)', instrument: false },
            { pattern: '/**/*.@(ts|js)' }
        ],
        tests: [
            { pattern: 'wwwroot/**/*', ignore: true },
            { pattern: 'Configurations/**/*', ignore: true },
            { pattern: 'Scripts/**/*', ignore: true },
            { pattern: 'node_modules/!(chai|chai-as-promised|sinon|sinon-chai)', ignore: true },
            { pattern: 'node_modules/@dolittle/!(typescript.build)', ignore: true },
            { pattern: 'Distribution/**/*', ignore: true },
            { pattern: '/**/for_*/**/given/*.@(ts|js)', ignore: true },
            { pattern: '/**/for_*/*.@(ts|js)' },
            { pattern: '/**/for_*/**/!(given)/*.@(ts|js)' }
        ],
        compilers: {
            '**/*.@(js|ts)': wallaby.compilers.typeScript({
                module: 'commonjs',
                downlevelIteration: true,
                allowJs: true,
                experimentalDecorators: true,
                esModuleInterop: true,
                outDir: "/temp",
                target: 'es6'
            })
        },
        preprocessors: {
            '**/*.jsts': file => file.changeExt('js').content
        },
        setup: (wallaby) => {
            process.env.IS_TESTING = "true";
            global.expect = chai.expect;
            let should = chai.should();
            global.sinon = require('sinon');
            let sinonChai = require('sinon-chai');
            let chaiAsPromised = require('chai-as-promised');
            chai.use(sinonChai);
            chai.use(chaiAsPromised);
        
            global.mock = require('@fluffy-spoon/substitute').Substitute;
        },
        testFramework: 'mocha',
        env: { type: 'node', runner: 'node' }
    }
}