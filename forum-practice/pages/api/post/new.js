// /api/post/new 로 들어오면 이 파일이 실행됨.
import { connectDB } from "@/util/database"


export default async function handler(요청, 응답) {
    if (요청.method == 'POST'){
        // db저장 안 되게 예외처리
      if (요청.body.title == '') {
        return 응답.status(500).json('제목써라')
      }
      let db = (await connectDB).db('codingapple')
      let result = db.collection('post').insertOne(요청.body);
      return 응답.redirect(302, '/list')
    }
  } 