const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#3FD2B4',
                            '@link-color': '#3FD2B4',
                            '@success-color': '#3FD2B4',
                            '@error-color': '#DB314D'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};