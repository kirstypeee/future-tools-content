'use strict';

/**
 * Form.js controller
 *
 * @description: A set of functions called "actions" for managing `Form`.
 */

module.exports = {

  /**
   * Retrieve form records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.form.search(ctx.query);
    } else {
      return strapi.services.form.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a form record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.form.fetch(ctx.params);
  },

  /**
   * Count form records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.form.count(ctx.query);
  },

  /**
   * Create a/an form record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.form.add(ctx.request.body);
  },

  /**
   * Update a/an form record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.form.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an form record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.form.remove(ctx.params);
  }
};
