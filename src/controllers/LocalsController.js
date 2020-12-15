const knex = require('./database');
const { delete, del } = require('../database/connection');

module.exports = {
    async index(req, res) {
        const results = await knex('locals')
        return results.json(results); 
    },
    
    async create(req, res, next){
        try{
            const { local } = req.body
            await knex('locals').insert({
                local
            })
            return res.status(201).insert()

            return
        }catch(error){
            next(error)
        }

    },

    async update(req, res, next){
        try {
            const { username } = req.body
            const { id } = req.params
            await knew('locals')
            .update(local)
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const { id } = req.params

            await knex('locals')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}