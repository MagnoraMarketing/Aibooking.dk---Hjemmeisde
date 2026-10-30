// The signup and login flows for the customer account live on the separate
// backend app, not this marketing site — trying the product and managing an
// account both happen there.
export const BACKEND_URL = 'https://app.aibooking.dk';
export const SIGNUP_URL = `${BACKEND_URL}/signup`;
export const LOGIN_URL = `${BACKEND_URL}/login`;
// The customer dashboard as an app on the phone: ?app=1 shows the install steps.
export const APP_URL = `${BACKEND_URL}/login?app=1`;
