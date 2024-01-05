'use client'

import { usePathname, useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    let pah = usePathname()
    return (
        <button
        onClick={()=>{
            router.push('/')
            // router.back() 뒤로가기
            // router.forward() ,뒤로가기
            // router.refresh() 새로고침 -> 바뀐내용만 새로고침. (soft refresh)
            // router.prefetch('/detail/dsds') 페이지 미리로드.
        }
        }
        >버튼</button>
    )
}