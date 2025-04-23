'use strict';

/**
 * subservice router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subservice.subservice');
