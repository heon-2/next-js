'use client'
import Image from "next/image"
import 사진0 from '/public/food0.png'
import 사진1 from '/public/food1.png'
import 사진2 from '/public/food2.png'
import { useState} from "react"

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    let [수량,수량설정] = useState([0,0,0])
    return (
      <div>
        <h2>상품목록</h2>
        {
            상품.map((a,i) => {
                return (
                    <div className="food" key ={i}>
                        <div>
                            <img src={`/food${i}.png`}/>
                        </div>
                        <h4>{상품[i]} $40</h4>
                        <button onClick={
                            ()=>{
                                let copy = [...수량]
                                copy[i]--
                                수량설정(copy)
                            }
                        }>
                            -
                        </button>
                        <span>
                            상품수량 : {수량[i]}
                        </span>
                        <button onClick={
                            () => { 
                                let copy = [...수량]
                                copy[i]++
                                수량설정(copy)

                            } 
                        }>+</button>
                    </div>
                )
            })
        }
      </div>
    )
  } 


// ----


// export default function page() {
//     return(
//         <div>
//             <div>상품 목록</div>
//         </div>
//     )
// }