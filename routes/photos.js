const express = require('express');
const router = express.Router();
const {index, show, store, destroy} = require('../controllers/photo_controller');
const photo_validationRules = require('../validationRules/photo_rules');

//Get all photos
router.get('/', index);

//Get photo by id
router.get('/:photoId', show);

//Store photo to database
router.post('/', photo_validationRules.createRules, store);

//delete photo from database
router.delete('/:photoId', destroy);


module.exports = router;
