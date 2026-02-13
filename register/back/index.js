// 1. express
// 2. cors
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const path = require('path');

require('dotenv').config(); // .env 변수 설정

const app = express();

app.use(cors()); // 크로스 오리진 설정
app.use(express.json()); // 제이슨 데이터 파싱

app.use('/public', express.static(path.join(__dirname, 'public')));

// 3. root 설정
app.get('/', (request, response) => {
  response.send('Hello World');
});

// 4. 라우터 설정
app.use('/auth', authRouter);

// 5. listen 설정
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
