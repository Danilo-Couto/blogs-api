module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
  {
    // underscored: true, 
    timestamps: false,
    tableName: 'PostsCategories',
  });  

  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, { 
      foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategories, as: 'blogPosts',
    });

    models.BlogPosts.belongsToMany(models.Categories, { 
      foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategories, as: 'categories',
    });
  };

  return PostsCategories;
};

// nao tem atributos mesmo