const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');

mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + '/resources'
        }
    },
    plugins: [
        new Dotenv()
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ]);

if (mix.inProduction()) {
    mix.version();
}
