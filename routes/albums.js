const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
const albumValidationRules = require('../validation/album');


router.get('/', albumController.index);

router.get('/:albumId', albumController.show);

router.post('/', albumValidationRules.albumValidationRules, albumController.store);

router.put('/:albumId', albumValidationRules.albumValidationRules, albumController.update);

router.post('/:albumId/photos', albumValidationRules.addPhotoRules, albumController.addPhoto);

router.delete('/:albumId/photos/:photoId', albumController.deletePhoto);

router.delete('/:albumId', albumController.destroy);


module.exports = router;