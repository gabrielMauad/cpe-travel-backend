const { del } = require('../database/connection');
const knex = require('../database');
const { response } = require('express');
const userModel = require('../models/user')

module.exports = {
    async getByEmail(req, res) {
        const { email } = req.params;
        const results = await userModel.getByEmail({ email })

        return res.json(results); 
    },
    
    async create(req, res, next){
        try{
            const admin = false;
            const { email, password } = req.body
            const tempUser = { email, password, admin}
            const results = await userModel.create( tempUser  )

            return res.status(201).json(results)

        }catch(error){
            next(error)
        }

    },


    async update(req, res, next){
        try {
            const { email, password } = req.body
            const results = await userModel.updateById({ email, password})
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const { email, password } = req.params
            const results = await userModel.deleteById({ email, password })

            return res.json(results)
            
        } catch (error) {
            next(error)
        }
    },

    async authenticate(req, res, next){
        try {
            const { email, password } = req.body;

            const toConfirm = await knex('user')
            .select()
            .where({ email, password });

            return res.json(toConfirm[0]);

        } catch (error) {
            next(error)
        }
    }
}