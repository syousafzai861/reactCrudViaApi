'use strict';

/**
 * crud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crud.crud');
