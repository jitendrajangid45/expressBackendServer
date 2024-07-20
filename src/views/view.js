const express = require('express');
const router = express.Router();
require('dotenv').config()
const controllers = require('../controllers/controller');


router.get('/active-customers', controllers.activeCustomers);

router.get('/transaction-of-account', controllers.transactionOfAccount);

router.get('/transaction-amount', controllers.transactionAmount);

router.get('/transaction-amount-counts', controllers.transactionAmountCounts);

router.get('/distinct-products', controllers.distinctProducts);



module.exports = router;