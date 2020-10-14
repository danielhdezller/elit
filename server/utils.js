const SQL = require('sequelize');
require('dotenv').config();

module.exports.createStore = () => {
  const db = new SQL(
    process.env.SEQUELIZE_DB,
    process.env.SEQUELIZE_ROLE,
    process.env.SEQUELIZE_PASSWORD,
    {
      //host
      dialect: 'sqlite',
      storage: './store.sqlite',
      operatorsAliases,
      logging: false,
    }
  );

  //THIS IS THE USRER MODEL
  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    email: SQL.STRING,
    token: SQL.STRING,
  });

  return { users };
};
