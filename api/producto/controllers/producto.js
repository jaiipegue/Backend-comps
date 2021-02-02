'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  //ENCONTRAR
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.producto.search(ctx.query);
    } else {
      entities = await strapi.services.producto.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.producto }));
  },

  //ENCONTRAR UNO
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.producto.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.producto.restaurant });
  },
};