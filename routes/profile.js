const express = require('express');
const router = express.Router();
const multer = require('multer');
const { isAuth } = require('../middlewares/auth');
const upload = multer({dest: './public/uploads/temp'});
const profileController = require('../controllers/profile');
const authController = require('../controllers/auth');

// ToDo: /uid url
router.get('/', isAuth, profileController.index);

router.get('/edit', isAuth, profileController.editProfile);
router.post('/edit', isAuth, profileController.editProfilePost);

router.get('/submit', isAuth, profileController.submit)
router.post('/submit', upload.single('coverPicture'), profileController.submitProject)
router.get('/view/:id', profileController.viewProject)
router.get('/delete/:id', profileController.deleteProject)
router.get('/edit/:id', authController.delete);

router.get('/auth/reset', authController.changepw);


module.exports = router;