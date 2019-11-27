const build = require('@dolittle/typescript.build');

module.exports = build.wallaby((wallaby, settings) => {
    settings.compilers = {
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
    settings.preprocessors = {
        '**/*.jsts': file => file.changeExt('js').content
    };
});