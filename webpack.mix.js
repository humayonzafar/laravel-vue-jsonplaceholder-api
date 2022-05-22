const mix = require('laravel-mix');
const Dotenv = require('dotenv-webpack');
const path = require('path');

mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, './resources'),
            '~': path.join(__dirname, './resources/js')
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
