'use strict';

/**
 * Attendees.js controller
 *
 * @description: A set of functions called "actions" for managing `Attendees`.
 */

module.exports = {

  /**
   * Retrieve attendees records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.attendees.search(ctx.query);
    } else {
      return strapi.services.attendees.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a attendees record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.attendees.fetch(ctx.params);
  },

  /**
   * Count attendees records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attendees.count(ctx.query);
  },

  /**
   * Create a/an attendees record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attendees.add(ctx.request.body);
  },

  /**
   * Update a/an attendees record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attendees.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an attendees record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attendees.remove(ctx.params);
  }
};
