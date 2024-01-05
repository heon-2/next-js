import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Detail(props) {
  let db = (await connectDB).db('codingapple')
  let result = await db.collection('post').findOne({_id : new ObjectId('6596d5f225d20b6d454a88f2')});
  console.log(result)
  console.log(props.params.id) // 유저가 입력한 것은 props로 찍힘.

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}