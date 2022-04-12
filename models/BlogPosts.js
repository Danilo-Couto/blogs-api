const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
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
    underscored: true, 
    // timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { 
      foreignKey: 'userId', as: 'User',
    });
 };

  return BlogPosts;
};