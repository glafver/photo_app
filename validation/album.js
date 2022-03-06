const { body } = require('express-validator');
const models = require('../models');

// title string required must be at least 3 chars long

const albumValidationRules = [
    body('title').exists().isString().trim().isLength({ min: 3 })
    .custom(async value => {
        const title = await new models.Album({ title: value }).fetch({ require: false });
        if (title) {
            return Promise.reject("Title already exists.");
        }

        return Promise.resolve();
    }),
];

module.exports = { albumValidationRules };