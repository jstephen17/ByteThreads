import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

class DatabaseHandler{

    #uri = process.env.MONGODB_URI;
    #client = new MongoClient(this.#uri);

    static #instance;

    #database;

    constructor(){
        if(DatabaseHandler.#instance){
            return DatabaseHandler.#instance;
        }
        DatabaseHandler.#instance = this;
    }
    
    static getInstance(){
        return new DatabaseHandler();
    }

    async connect(database_name){
        try {
            if(!this.#database){
                await this.#client.connect();
                console.log("Connected to DB")
                this.#database = this.#client.db(database_name);
            }

        } catch (err) {
            console.error(err);
        }
    }

    async disconnect(){
        if(this.#client){
            await this.#client.close();
            this.#database = null;
            console.log('disconnected from db')
        }
    }

    async fetch(collection_name){
        if(!this.#database){ console.error("Unestablish connection"); return;}

        const collection = this.#database.collection(collection_name);

        if(!collection){ console.error("collection '" + collection_name + "' not found"); return;}

        const out  = await collection.find({}).toArray();
        return out;
    }

}

const DBService = DatabaseHandler.getInstance();

export default DBService;
export { DatabaseHandler as DBase};