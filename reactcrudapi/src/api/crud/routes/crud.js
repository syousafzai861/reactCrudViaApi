'use strict';

/**
 * crud router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::crud.crud');
