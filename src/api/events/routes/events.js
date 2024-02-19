'use strict';

/**
 * events router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::events.events', {
    config: {
        update: {
            middlewares: ["api::events.is-owner"],
        },
        delete: {
            middlewares: ["api::events.is-owner"],
        },
    }
});