const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../ENV');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        //check pass
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = JWT.sign({
                email: candidate.email,
                userId: candidate._id,
            }, `${keys.JWTKey}`, {expiresIn: 3600});

            res.status(200).json({
                token: `Bearer ${token}`,
            })
        } else {
            res.status(401).json({
                message: 'Bad password',
            })
        }
    } else {
        res.status(404).json({
            message: 'User not found',
        })
    }
};


 module.exports.register = async (req,res) => {
    const candidate = await User.findOne({email: req.body.email});
     if (candidate) {
        res.status(409).json({
            message: 'This email is already taken',
        })
     } else {
         const salt = bcrypt.genSaltSync(10);
         const password = req.body.password;
         const user = new User({
             email: req.body.email,
             password: bcrypt.hashSync(password, salt)
         });

         try {
             await user.save();
             res.status(201).json(user)
         } catch (e) {
             errorHandler(res, e)
         }

     }
};
