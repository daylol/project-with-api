import React, { useState } from 'react'

type PostType = {
    body: string
    id: number
    title: string
    userId: number
  }

type PropsType = {
    post: PostType
}

const PostsInfo: React.FC<PropsType> = ({post}) => {
  
    const [more, setMore] = useState(false)

    return (
    <div className='font-bold text-[24px]'>
        <h2 className='my-7 hover:cursor-pointer' onClick={()=> {setMore(!more)}}>{post.title}</h2>
        {
            more && <article className='text-[18px] mb-7'>{post.body}</article>
        }
        <hr />
    </div>
  )
}

export default PostsInfo;