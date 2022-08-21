module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });  

  PostsCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPosts, { 
      foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategories, as: 'blogPosts',
    });

    models.BlogPosts.belongsToMany(models.Category, { 
      foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategories, as: 'categories',
    });
  };

  return PostsCategories;
};

// nao tem atributos mesmo