'use strict';

/**
 * subservice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subservice.subservice');
