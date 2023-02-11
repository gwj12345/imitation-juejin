'use strict';

/**
 * advertise service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advertise.advertise');
