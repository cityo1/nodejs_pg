const router = require('express').Router(); // express에서 제공하는 라우트 메서드 저장
const { postAuth, postLogin } = require('../controllers/postAuthControllers');
const upload = require('./upload');

// 엔드포인트 설정
router.post('/register', upload.single('profile_image'), postAuth);
router.post('/login', postLogin);

module.exports = router;
