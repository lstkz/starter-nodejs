/**
 * An util to load routes
 */

import _ from 'lodash';
import passport from 'passport';
import HTTPError from 'http-errors';
import wrapAsync from 'express-wrap-async';

/**
 * Load all routes with authentication check
 * @param {Object} router the express router
 * @param {Object} routes the route config
 */
export default function loadRoutes(router, routes) {
  _.forEach(routes, (verbs, url) => {
    _.forEach(verbs, (def, verb) => {
      const actions = [
        (req, res, next) => {
          if (!req.headers.authorization) {
            return next();
          }
          return passport.authenticate('bearer', { session: false })(req, res, next);
        },
        (req, res, next) => {
          if (def.public) {
            next();
            return;
          }
          if (!req.user) {
            next(new HTTPError.Unauthorized());
            return;
          }
          next();
        },
      ];
      const method = def.method;
      if (!method) {
        throw new Error(`method is undefined in ${verb.toUpperCase()} ${url}`);
      }
      actions.push(method);
      router[verb](url, wrapAsync(actions));
    });
  });
}
