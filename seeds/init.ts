import { Knex } from "knex";
import { getMaxListeners } from "process";

export async function seed(knex: Knex): Promise<void> {

    await knex.raw('TRUNCATE TABLE "users" CASCADE');


    // Inserts seed entries
    await knex("users").insert([
        {
            username: "Ram" ,
            email:"ram@gmail.com",
            password:"123"
        },

        { 
            username: "prajot" ,
            email:"PK@gmail.com",
            password:"123pk"
        },
        { 
            
            username: "siddhu" ,
            email:"sid@gmail.com",
            password:"sid12"
        },
    ]);
};
