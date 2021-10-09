(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    function init(game) {
        let createPlatform = platform.create;
            createPlatform(0, game.world.height - 32, 3, 2);    
            createPlatform(880, 1, 0.1, 23);
            createPlatform(710, 585);
            createPlatform(290, 500, 0.5);
            createPlatform (0, 400, 0.3);
            createPlatform(213, 315, 0.7);
    }
    platform.init = init;
})(window);