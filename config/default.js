/* eslint-disable no-magic-numbers, import/no-commonjs */
/**
 * Main config file
 */

module.exports = {
  PORT: 3100,
  MONGODB_URL: 'mongodb://127.0.0.1:27017/starter',
  VERBOSE_LOGGING: true,

  SECURITY: {
    SALT_LENGTH: 64,
    ITERATIONS: 4096,
    PASSWORD_LENGTH: 64,
  },
  SMTP_HOST: 'smtp.mailgun.org',
  SMTP_PORT: 587,
  SMTP_USERNAME: 'postmaster@sandboxa999b617e8334670921935b26a97a680.mailgun.org',
  SMTP_PASSWORD: '9d775f721ab7c0031e957720074ef833',
  EMAIL_SENDER_ADDRESS: 'noreply@example.com',
  RESET_PASSWORD_EXPIRATION: '1d',
};
