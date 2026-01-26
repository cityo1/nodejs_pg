const db = require('../db/db');

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
exports.getRevenue = async (request, response) => {
  try {
    const result = await db.pool.query("SELECT * FROM revenue")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get Revenue Error: ${error}`}) // 데이터를 json 형식으로 변환
  }
};