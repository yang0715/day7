require.config({
    baseUrl: 'js/app',
    paths: {
        'jquery': "../libs/jquery-2.1.1.min",
        'swiper': '../libs/swiper-4.2.0.min',
        'index': 'index',
        'util': 'util'
    },
    shim: {
        'util': {
            deps: ['jquery'] //这个模块的依赖
        }
    }
})

require(['index'], function() {

})