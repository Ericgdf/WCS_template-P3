const { db } = require("../config");


class BaseModel {
    
    table; // créer une valeur table
    db;

    constructor(table) {
        this.table = table
        this.db = db
    }; 

    getAll(){
        return this.db.query(`SELECT * FROM ${this.table}`)
    }; // créer une fonction qui récupère toute les données de la table

    getByID(id){
        return this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
    } // créer une fonction qui récupère toute les données de la table
}

module.exports = BaseModel