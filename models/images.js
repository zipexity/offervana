// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define("Images", {
    // The email cannot be null, and must be a proper email before creation
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  });
  Images.associate = function(models) {
    // We're saying that a Images should belong to an User
    // A Images can't be created without a User due to the foreign key constraint
    Images.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Images;
};
