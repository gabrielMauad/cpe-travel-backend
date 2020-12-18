const { v4:uuidv4 } = require("uuid");
const connection = require("../database/connection");
const { getByEmail } = require("../controllers/UserController");

module.exports = {
    async create(user){
        const user_id = uuidv4();
        user.user_id = user_id;
        
        const result = await connection("user").insert(user);
        return result;
    },
    async getByEmail({email}){
        const result = await connection("user")

        .where({ email })
        .select("*");
        return result;
    },
    async updateById({ email, password}){
        const result = await connection("user")
        .where({ email })
        .update({ email, password })

        return result;
    },
    async deleteById({ email, password}){
        const result = await connection("user")
        .where({ email, password })
        .del()
    }
    
}