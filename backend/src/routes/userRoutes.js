import express from 'express';
import {
  check,
  forgotPassword,
  login,
  logout,
  protect,
  resetPassword,
  signup,
  updateMe,
  updatePassword
} from '../controllers/authController.js';
import {
  createProperty,
  getUsersProperties
} from '../controllers/propertyController.js';

const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protected user routes
router.use(protect);  // apply `protect` to all routes below this line

router.get('/me', check);
router.patch('/updateMe', updateMe);
router.patch('/updateMyPassword', updatePassword);

// Property / accommodation routes
router.post('/newAccommodation', createProperty);
router.get('/myAccommodation', getUsersProperties);

export default router;
