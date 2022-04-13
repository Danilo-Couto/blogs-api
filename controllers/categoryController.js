const { Category } = require('../models');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;

        const newCategory = await Category.create({ name });

        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (req, res, next) => {
    try {
        const CategoryList = await Category.findAll();
        return res.status(200).json(CategoryList);
    } catch (error) {
        next(error);      
    }
};

const getCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const category = await Category.findOne({ where: { id },
        });

        if (!category) return res.status(404).json({ message: 'Category does not exist' }); 

        return res.status(200).json(Category);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
};
