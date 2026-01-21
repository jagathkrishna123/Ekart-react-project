import React, { useEffect, useState } from 'react'

const DataFetchApi = () => {

    const [post, setPost] = useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
    },[])//run only once
  return (
    <div>
        {post.map((item)=>(
            <p key={item.id}> {item.title} {item.body} </p>
            
        ))}
    </div>
  )
}

export default DataFetchApi