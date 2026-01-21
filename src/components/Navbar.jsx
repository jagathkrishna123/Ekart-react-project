import React, { useState, useEffect } from 'react'

export default function Navbar() {

  const [resourceType, setResourceType] = useState('posts')

  

  useEffect(() => {
    console.log('resource type changed')
  },[resourceType])// run only once

  return (
    <>
      <div className="button-container">
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}
