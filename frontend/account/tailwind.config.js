const baseConfig = require('../../tailwind.config.base');

module.exports = {
    content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
    ...baseConfig,
};
