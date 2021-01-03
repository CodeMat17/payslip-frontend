require("dotenv").config();
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'payslip',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    generate: {
        fallback: true
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: 'green',
        height: '5px'
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~plugins/axios',
        {
            src: '~plugins/vuelidate',
            mode: 'client'
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/auth',
        '@nuxtjs/toast',
    ],

    toast: {
        position: 'top-center',
        action: {
            text: 'Cancel',
            onClick: (e, toastObject) => {
                toastObject.goAway(0);
            }
        }
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_AUTH_URL
    },

    // Auth module config
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/local',
                        method: 'post',
                        propertyName: 'jwt'
                    },
                    user: {
                        url: 'users/me',
                        method: 'get',
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        html: { minify: { collapseBooleanAttributes: true, decodeEntities: true, minifyCSS: false, minifyJS: false, processConditionalComments: true, removeEmptyAttributes: true, removeRedundantAttributes: true, trimCustomFragments: true, useShortDoctype: true } },
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        extend(config, ctx) {}
    }
}