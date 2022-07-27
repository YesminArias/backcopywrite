const { Router } = require('express');



const reverseText = require('./reverseText')

const router = Router();


router.use('/', reverseText);


module.exports = router;