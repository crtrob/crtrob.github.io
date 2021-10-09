(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    function init(game) {
        let createCannon = cannon.create;
            createCannon("right", 650, 7000);
            createCannon("top", 520);
            createCannon("right", 410);
    };
    cannon.init = init;
})(window);
