const router = require('express').Router(); // express에서 제공하는 라우트 메서드 저장
const topProductController = require('../controllers/topProductController');

router.get('/top_product', topProductController.getTopProduct);

module.exports = router;