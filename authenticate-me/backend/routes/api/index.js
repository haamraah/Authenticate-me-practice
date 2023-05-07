// backend/routes/api/index.js
const router = require('express').Router();
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});
router.get('/csrf/restore', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('XSRF-TOKEN restored!');
});
module.exports = router;
