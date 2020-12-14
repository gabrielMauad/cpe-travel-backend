const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('locals')
        return results.json(results); 
    },
    async create(req, res){
        await knex('locals').insert();
    }
}