const connection = require("../database/connection");
const knex = require(../migrations")

module.exports = {  
    async create(){
        const result = await connection("locals").insert(locals);
        return result;
    },
    async getById({local_id}){
        const result = await connection("locals")
        .where({local_id})
        .select("*");
        return result;
    },
    async updateById(local_id,locals){
        const result = await connection("locals")
        .where({local_id})
        .update(locals);
        return result;
    },
    async deleteById(){
        const result = await connection("locals")
        .where({local_id})
        .delete();
    }
    
}