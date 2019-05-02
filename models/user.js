// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    iandD: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    detailsUpgrades: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    comparables: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    ibuycomparables: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    reviewInstant: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    negotiateOffer: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    marketTrends: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    settleSheet: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    saleTime: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    agentOffer: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },

    proprangeOne: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    proprangeTwo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    marketHistoryNum: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    marketHistoryPerc: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    oneYearNum: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    oneYearPerc: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    projDom: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    contract: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false
    }
  });

  User.associate = function(models) {
    // We're saying that a User should belong to an Account
    // A User can't be created without an Account due to the foreign key constraint
    User.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });

    User.belongsTo(models.Agent, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
