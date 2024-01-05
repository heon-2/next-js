import Image from 'next/image'
import styles from './page.module.css'
import { MongoClient } from 'mongodb'
import { connectDB } from '@/util/database.js'
export default async function Home() {
  const client = await connectDB;
  const db = client.db("codingapple")
  // 컬렉션의 모든 documnet 꺼내오려면,
  let result = await db.collection('post').find().toArray();
  console.log(result)
  return (
    <div>
      메인페이지임.
    </div>
  )
}
