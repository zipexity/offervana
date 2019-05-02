// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Offers = sequelize.define("Offers", {
    // The email cannot be null, and must be a proper email before creation
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    gross: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    net: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    fees: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    bestOffer: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    agentDiscount: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    repairEstimate: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  });

  Offers.associate = function(models) {
    // We're saying that a User should belong to an Account
    // A User can't be created without an Account due to the foreign key constraint
    Offers.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Offers;
};
