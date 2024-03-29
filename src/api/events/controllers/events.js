'use strict';
const { sanitize } = require('@strapi/utils');

/**
 * events controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::events.events', ({strapi}) => ({
    async me(ctx){
        const user = ctx.state.user;
        if(!user){
            return ctx.badRequest([{messages: [{id: 'No authorization header was found'}]}]);
        }
        const data = await strapi.db.query('api::events.events').findMany({
            where: {
                user: {
                    id: user.id
                }
            },
            populate: true
        });
        if(!data){
            return ctx.notFound();
        }
        const sanitizedData = await this.sanitizeOutput(data, ctx);
        return sanitizedData;
    },
    async create(ctx){
        const user = ctx.state.user;
        const res = await super.create(ctx);
        const updatedRes = await strapi.entityService.update('api::events.events', res.data.id, {
            data: {
                user: {
                    id: user.id,
                }
            },
            populate: "*",
        });
        return updatedRes;
    }
}));

