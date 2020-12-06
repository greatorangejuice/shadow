const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.createUser = (req, res) => {

};

module.exports.getUserByID = (req, res) => {

};

