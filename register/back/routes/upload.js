const multer = require('multer');

const storage = multer.memoryStorage(); // 메모리에 이미지를 저장
const upload = multer({ storage }); // 객체의 키와 값이 같으면 한 번만 써도 됨

module.exports = upload;
