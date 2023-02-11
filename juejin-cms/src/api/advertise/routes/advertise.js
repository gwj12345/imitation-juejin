'use strict';

/**
 * advertise router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::advertise.advertise');
