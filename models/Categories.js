const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Categories = sequelize.define('Categories', Attributes,
  {
    // underscored: true, 
    timestamps: false,
    tableName: 'Categories',
  });

  return Categories;
};