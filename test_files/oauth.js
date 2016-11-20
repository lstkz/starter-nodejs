import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import express from 'express';
import session from 'express-session';
const app = express();
app.set('port', 5000);

let GOOGLE_TOKEN = null;

app.use(session({ secret: 'sdasdasdasd', resave: true, saveUninitialized: true }));

passport.use(new GoogleStrategy({
    clientID: '462818265626-05l7iuhukblkg8btn5ci9s019aj1ts28.apps.googleusercontent.com',
    clientSecret: '7qVYm3K-jF7Pq5xJixZzLl-y',
    callbackURL: 'http://localhost:5000/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    done(null, { accessToken });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
      <pre>
 GOOGLE_TOKEN="${GOOGLE_TOKEN}"
      </pre>
      <br/>
      <br/>
      <a href="/google">login with google</a><br/>
      </body>
    </html>
  `);
});

app.get('/google',
  passport.authenticate('google', { scope: ['email'] }));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    GOOGLE_TOKEN = req.user.accessToken;
    res.redirect('/');
  });


app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
