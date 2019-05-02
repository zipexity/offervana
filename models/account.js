// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "client"
    }
  });
  // Creating a custom method for our Account model. This will check if an unhashed password entered by the Account can be compared to the hashed password stored in our database
  Account.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Account Model lifecycle
  // In this case, before a Account is created, we will automatically hash their password
  Account.hook("beforeCreate", function(account) {
    account.password = bcrypt.hashSync(
      account.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Account;
};
