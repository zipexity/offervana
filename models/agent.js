// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Agent = sequelize.define("Agent", {
    // The email cannot be null, and must be a proper email before creation
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  });

  Agent.associate = function(models) {
    // We're saying that a User should belong to an Account
    // A User can't be created without an Account due to the foreign key constraint
    Agent.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Agent;
};
