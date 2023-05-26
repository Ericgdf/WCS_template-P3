class BaseModel {
    
    table; // créer une valeur table

    constructor(table) {
        this.table = table
    }; 

    getAll(){
        return `SELECT * FROM ${this.table}`
    }; // créer une fonction qui récupère toute les données de la table

    getByID(id){
        return `SELECT * FROM ${this.table} WHERE id = ?`
    } // créer une fonction qui récupère toute les données de la table
}