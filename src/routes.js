
import AuthController from './controllers/AuthController';

export default {
  '/login': {
    post: {
      method: AuthController.login,
      public: true,
    },
  },
  '/social-login': {
    post: {
      method: AuthController.socialLogin,
      public: true,
    },
  },
  '/register': {
    post: {
      method: AuthController.register,
      public: true,
    },
  },
  '/me': {
    get: {
      method: AuthController.getMe,
      public: true,
    },
  },
};
