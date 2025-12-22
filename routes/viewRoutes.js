import express from 'express';
import {
  alerts,
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getMyTours,
  updateUserData,
} from '../controllers/viewsController.js';
import { isLoggedIn, protect } from '../controllers/authController.js';

const router = express.Router();

router.use(alerts);

router.route('/').get(isLoggedIn, getOverview);

router.route('/tour/:slug').get(isLoggedIn, getTour);
router.route('/login').get(isLoggedIn, getLoginForm);
router.route('/me').get(protect, getAccount);
router.route('/my-tours').get(protect, getMyTours);

router.route('/submit-user-data').post(protect, updateUserData);

export default router;
