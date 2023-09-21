import Sequelize from "sequelize";

import db from "../db.js";

const Cardapio = db.define("cardapio",
  {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   item: {
     type: Sequelize.STRING,
     allowNull: false
   },
   descricao: {
     type: Sequelize.STRING,
     allowNull: false
   },
   precos: {
     type: Sequelize.INTEGER,
     autoIncrement: false
  }
}
);

export default Cardapio;