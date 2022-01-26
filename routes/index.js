const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if a request to any endpoint that doesn't exist, a 404 error indication request incorrect
router.use((req, res) => {
  res.status(404).end;
});

module.exports = router;
