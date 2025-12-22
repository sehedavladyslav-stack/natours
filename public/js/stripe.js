/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts.js';

export const bookTour = async (tourId) => {
  try {
    const stripe = window.Stripe(
      'pk_test_51SaLBV12MqSmK2Q2AHOX9pj5AdtQIRU6VkPhKfi7QPmWCOH0WB1jyb0Zb3aSy9LQxurWxAx1aSJAZLGOnbZRf2BI00Bf3eii9E',
    );

    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
