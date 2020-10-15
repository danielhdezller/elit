module.exports = (elitDb, DataTypes) => {
  const User = elitDb.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    githubLogin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    githubToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (db) => {
    db.User.hasMany(db.Data);
  };
  return User;
};
