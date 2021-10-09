(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    function init(game) {
        let createCollectable = collectable.create;
            createCollectable(type.max, 625, 600,);
            createCollectable(type.grace, 490, 400);
            createCollectable(type.kennedi, 450, 250);
    };
    collectable.init = init;
})(window);