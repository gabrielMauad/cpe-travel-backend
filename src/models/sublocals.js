const connection = require("../database/connection");

module.exports = {
    async create(){
        const result = await connection("sublocals").insert(sublocals);
        return result;
    },
    async getById({sublocal_id,local_id}){
        const result = await connection("sublocals")
        .where({sublocal_id,local_id})
        .select("*");
        return result;
    },
    async updateById(sublocal_id,sublocals){
        const result = await connection("sublocals")
        .where({sublocal_id})
        .update(sublocals);
        return result;
    },
    async deleteById(){
        const result = await connection("sublocals")
        .where({sublocal_id})
        .delete();
    }
    
}