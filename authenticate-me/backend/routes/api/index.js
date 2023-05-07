// backend/routes/api/index.js
const router = require('express').Router();



// to restore csrf
router.get('/csrf/restore', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('XSRF-TOKEN restored!');
});

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'shashu'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});
// TESTING ROUTES
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
