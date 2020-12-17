const { del } = require('../database/connection');
const knex = require('../database');
const { response } = require('express');

module.exports = {
    async index(req, res) {
        const results = await knex.select().from('user')

        return res.json(results); 
    },
    
    async create(req, res, next){
        try{
            const admin = false;
            const { user_id, email, password } = req.body
            const results = await knex('user').insert({user_id, email, password, admin })

            return res.status(201).json(results)

        }catch(error){
            next(error)
        }

    },


    async update(req, res, next){
        try {
            const { user_id, email, password } = req.body
            const results = await knex('user')
            .where({ user_id })
            .update({ email, password })
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const { user_id } = req.params

            await knex('user')
            .where({ user_id })
            .del()

            return res.send()
            
        } catch (error) {
            next(error)
        }
    }
}