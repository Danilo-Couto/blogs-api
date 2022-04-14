const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  published: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
};

module.exports = (sequelize) => {
  const BlogPosts = sequelize.define('BlogPosts', Attributes,
  {
    // underscored: false, 
    // timeStamps: false,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { 
      foreignKey: 'userId', as: 'User',
    });
 };

  return BlogPosts;
};