'use strict';

/**
 * price-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-package.price-package');
