import Sequelize from "sequelize";

let db = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized:false
      }
    },
    define: {
      freezeTableName: true
    }
  }
);

export default db;