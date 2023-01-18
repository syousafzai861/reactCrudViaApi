'use strict';

/**
 * crud controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::crud.crud');
