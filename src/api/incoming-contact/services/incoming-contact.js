'use strict';

/**
 * incoming-contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::incoming-contact.incoming-contact');
