// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    // The email cannot be null, and must be a proper email before creation
    to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    stepinProcess: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  });

  Messages.associate = function(models) {
    // We're saying that a User should belong to an Account
    // A User can't be created without an Account due to the foreign key constraint
    Messages.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Messages;
};
