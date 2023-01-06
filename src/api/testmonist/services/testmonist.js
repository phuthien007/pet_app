'use strict';

/**
 * testmonist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testmonist.testmonist');
