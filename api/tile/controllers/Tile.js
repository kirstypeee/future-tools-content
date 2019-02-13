'use strict';

/**
 * Tile.js controller
 *
 * @description: A set of functions called "actions" for managing `Tile`.
 */

module.exports = {

  /**
   * Retrieve tile records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tile.search(ctx.query);
    } else {
      return strapi.services.tile.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tile record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tile.fetch(ctx.params);
  },

  /**
   * Count tile records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tile.count(ctx.query);
  },

  /**
   * Create a/an tile record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tile.add(ctx.request.body);
  },

  /**
   * Update a/an tile record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tile.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tile record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tile.remove(ctx.params);
  }
};
