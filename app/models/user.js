module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
  	id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    }
  }, {
    paranoid: true
  });

  User.associate = function(models) {
    
  };

  return User;
};