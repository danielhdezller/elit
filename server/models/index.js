const Sequelize = require('sequelize');
const db = {};
require('dotenv').config();

const elitDb = new Sequelize(
  process.env.SEQUELIZE_DB,
  process.env.SEQUELIZE_ROLE,
  process.env.SEQUELIZE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      gtidle: 10000,
    },
  }
);

elitDb
  .authenticate()
  .then(() => {
    console.log('connected to Elit DB');
  })
  .catch((err) => {
    console.error('unable to connect to Elit Db', err);
  });

const User = elitDb.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  githubLogin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  githubToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports.User = User;
