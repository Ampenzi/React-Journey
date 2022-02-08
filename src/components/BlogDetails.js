import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'


function BlogDetails() {
  const { id } = useParams()
  const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
  const navigate = useNavigate()


  function handleDelete(){
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method:'DELETE'
    })
    .then(() =>{
      navigate('/')
    })
  }

  return (
    <div className='blog-details'>
      { isPending && <p>Loading...</p> }
      { error && <p>{error}</p> }
      { blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete} >Delete</button>
        </article>
      ) }
    </div>
  )
}

export default BlogDetails
