const router = require('express').Router(); // express에서 제공하는 라우트 메서드 저장
const volumeServiceController = require('../controllers/volumeServiceController');

router.get('/volume_services', volumeServiceController.getVolumeService);

module.exports = router;