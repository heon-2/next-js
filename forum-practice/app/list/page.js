import { connectDB } from "@/util/database.js"

export default async function List() {
  let db = (await connectDB).db('codingapple');
  let result = await db.collection('post').find().toArray();

  console.log(result)

  return (
    <div className="list-bg">
      { result.map((a,i)=>
        <div className="list-item" key={i}>
          <h4>{result[i].title}</h4>
          <p>1월 1일</p>
        </div>
      ) }
    </div>
  )
}