import Sequelize from "sequelize";

import db from "../db.js";

const Pagamento = db.define("pagamento",
  {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   valor: {
     type: Sequelize.INTEGER,
     autoIncrement: false
   },
   metodo: {
     type: Sequelize.STRING,
     allowNull: false
   },
   horario: {
     type: Sequelize.DATE,
     allowNull: false
  }
}
);

export default Pagamento;