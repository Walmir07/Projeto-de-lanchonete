import Sequelize from "sequelize";

import db from "../db.js";

const Pedido = db.define("pedido",
  {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   itens: {
     type: Sequelize.STRING,
     allowNull: false
   },
   estado: {
     type: Sequelize.STRING,
     allowNull: false
   },
   horario: {
     type: Sequelize.DATE,
     allowNull: false
  }
}
);

export default Pedido;