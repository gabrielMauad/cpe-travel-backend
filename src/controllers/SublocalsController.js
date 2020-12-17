
const { del } = require('../database/connection');
const knex = require('../database');
const { response } = require('express');

module.exports = {
    async index(req, res) {
        const results = await knex.select().from('sublocals')

        return res.json(results); 
    },
    
    async create(req, res, next){
        try{
            const { local_id, title, description } = req.body
            const results = await knex('sublocals').insert({ local_id, title, description })
            return res.status(201).json(results)

        }catch(error){
            next(error)
        }

    },


    async update(req, res, next){
        try {
            const { local_id, sublocal_id, description, title } = req.body
            const results = await knex('sublocals')
            .where({ sublocal_id })
            .update({ local_id, description, title })
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const { sublocal_id } = req.params

            await knex('sublocals')
            .where({ sublocal_id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}