const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    webpack(config, se) {
        if (!se.isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
})
