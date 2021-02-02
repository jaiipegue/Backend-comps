
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    // FUNCION ENCONTRAR 
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.tienda.search(ctx.query);
    } else {
      entities = await strapi.services.tienda.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.tienda }));
  },

  // FUNCION ENCONTRAR UNO 
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.tienda.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.tienda });
  },

};
