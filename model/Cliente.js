import Sequelize from "sequelize";

import db from "../db.js";

const Cliente = db.define("cliente",
  {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   nome: {
     type: Sequelize.STRING,
     allowNull: false
   },
   contato: {
     type: Sequelize.STRING,
     allowNull: false
   },
   endereco: {
     type: Sequelize.STRING,
     allowNull: false
   },
   preferencia:{
     type: Sequelize.STRING,
     allowNull: false
   }
}
);

export default Cliente;