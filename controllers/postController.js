const { BlogPosts, sequelize } = require('../models');
const { PostsCategories } = require('../models');

const createPost = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;   
        const { id } = req.tokenData;
        /*
        const categoriesId = (await Category.findAll()).map((cat) => cat.id);
        const existCategory = await categoryIds
            .every((categoryId) => categoriesId.includes(categoryId));
        if (!existCategory) return res.status(400).json({ message: '"categoryIds" not found' });  
        */
        await sequelize.transaction(async (t) => {
        const newPost = await BlogPosts.create({ title, content, userId: id }, { transaction: t });

        await Promise.all(categoryIds.map(async (categoryId) => {
           await PostsCategories
            .create({ postId: newPost.id, categoryId }, { transaction: t });            
            }));
        return res.status(201).json(newPost);
        });
    } catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') { 
            error.message = '"categoryIds" not found';
            error.statusCode = 400;
        }
        next(error); 
    }
};

const getAllPosts = async (req, res, next) => {
    try {
        const CategoryList = await BlogPosts.findAll();
        return res.status(200).json(CategoryList);
    } catch (error) {
        next(error);      
    }
};

module.exports = {
    createPost,
    getAllPosts,
};
