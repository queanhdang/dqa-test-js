var config = {
    deps:['js/dqa'],
    paths: {
        'owlcarousel': "js/owl.carousel.min",
        'slick': 'js/slick.min'
    },
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        },
        'slick': {
            deps: ['jquery']
        }
    }
};