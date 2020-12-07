const Universities = require('../models/Universities');
const errorHandler = require('../utils/errorHandler');

module.exports.getAllUniversities = async (req,res) => {
    try {
        const univers = await Universities.find()
        res.status(200).json({
            allUniversitiesAsMap: univers.map((obj) => {return obj.universityName}),
        })

    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.addUniversity = async (req, res) => {
    const candidate = await Universities.findOne({universityName: req.body.universityName.toUpperCase()})
    if (candidate) {
        res.status(409).json({
            message: 'Input university is already taken'
        })
    } else {
        const university = new Universities({
            universityName: req.body.universityName.toUpperCase()
        })

        try {
            university.save();
            res.status(201).json(university);

        } catch (e) {
            errorHandler(res, e);
        }
    }

}