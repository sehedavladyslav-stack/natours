import express from 'express';
import {
  getAllUsers,
  createUser,
  getUser,
  getMe,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  uploadUserPhoto,
  resizeUserPhoto,
} from '../controllers/userController.js';
import {
  signup,
  login,
  logout,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
} from '../controllers/authController.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout);

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.route('/updateMyPassword').patch(updatePassword);
router.route('/me').get(getMe, getUser);
router.route('/updateMe').patch(uploadUserPhoto, resizeUserPhoto, updateMe);
router.route('/deleteMe').delete(deleteMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
