const baseConfig = require("./tailwind.config.base");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    ...baseConfig,
};
