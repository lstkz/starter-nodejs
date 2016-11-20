import _ from 'lodash';
import AuthService from '../services/AuthService';

export default {
  login,
  register,
  socialLogin,
  getMe,
};

/**
 * Generate data for frontend
 * @param {Object} user
 * @returns {{token: *, user}}
 * @private
 */
async function _getAuthData(user) {
  return {
    token: await AuthService.createBearerToken(user.id),
    user: _.pick(user.toJSON(), 'id', 'email'),
  };
}

/**
 * Login user
 * @param {Object} req
 * @param {Object} res
 */
async function login(req, res) {
  const user = await AuthService.login(req.body.email, req.body.password);
  res.json(await _getAuthData(user));
}

/**
 * Register user
 * @param {Object} req
 * @param {Object} res
 */
async function register(req, res) {
  const user = await AuthService.register(req.body);
  res.json(await _getAuthData(user));
}


/**
 * Log in with social network
 * @param {Object} req
 * @param {Object} res
 */
async function socialLogin(req, res) {
  const user = await AuthService.socialLogin(req.body.accessToken, req.body.provider);
  res.json(await _getAuthData(user));
}

/**
 * Get current user
 * @param {Object} req
 * @param {Object} res
 */
function getMe(req, res) {
  if (!req.user) {
    res.json({
      user: null,
    });
  } else {
    res.json({
      user: _.pick(req.user.toJSON(), 'id', 'email'),
    });
  }
}
