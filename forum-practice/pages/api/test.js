export default function handler(요청,응답) {
    console.log(123)
    // 서버는 기능실행 후에 유저에게 응답해줘야함.
    if (요청.method == 'POST') {
        return 응답.status(200).json('API 통신 완료')        
    }
    // status code 보고 정해.

    // 숙제1. api/list로 GET method 요청하면 DB에 있던 codingapple 컬렉션의 모든 데이터 보여주기.
}
