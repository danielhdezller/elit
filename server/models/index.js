const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.SEQUELIZE_DB,
  process.env.SEQUELIZE_ROLE,
  process.env.SEQUELIZE_PASSWORD,
  {
    host: 'localhost',
    port: process.env.SEQUELIZE_PORT,
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

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to Elit DB');
  })
  .catch((err) => {
    console.error('unable to connect to Elit Db', err);
  });

const User = sequelize.define('User', {
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
  userStacks: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true,
  },
  id_event: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true,
  },
  linkedIn: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

const Event = sequelize.define('Event', {
  id_event: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  eventLeader: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  participants: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  categories: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Event = Event;
module.exports = db;
