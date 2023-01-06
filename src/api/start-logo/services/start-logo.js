'use strict';

/**
 * start-logo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::start-logo.start-logo');
