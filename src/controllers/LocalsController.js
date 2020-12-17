
const { del } = require('../database/connection');
const knex = require('../database');
const { response } = require('express');

module.exports = {
    async index(req, res) {
        const results = await knex.select().from('locals')

        return res.json(results); 
    },
    
    async create(req, res, next){
        try{
            const { title, country, description } = req.body
            const results = await knex('locals').insert({ title, country, description })
            return res.status(201).json(results)

        }catch(error){
            next(error)
        }

    },


    async update(req, res, next){
        try {
            const { local_id, description, title, country } = req.body
            const results = await knex('locals')
            .where({ local_id })
            .update({ description, title, country })
            
            return res.json(results)

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const { local_id } = req.params

            await knex('locals')
            .where({ local_id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}