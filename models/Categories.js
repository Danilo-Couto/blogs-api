const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', Attributes,
  {
    // underscored: true, 
    timestamps: false,
    tableName: 'Categories',
  });

  return Category;
};