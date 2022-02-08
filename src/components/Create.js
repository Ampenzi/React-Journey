import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')   
  const [author, setAuthor] = useState('Okemwa')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const blog = {title, body, author }
    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(()=>{
      console.log('New Blog Added.')
      setIsPending(false)
      navigate('/')
    })
  }
  return (
    <div className='create'>
        <h3>Add a New Blog</h3>
        <form onSubmit={handleSubmit}>
          
          <label>Title</label>
          <input
          type='text'
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          />
          
          <label>Body</label>
          <textarea
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}
          ></textarea>
          
          <label>Author</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value='Mario'>Mario</option>
            <option value='Dancun'>Dancun</option>
            <option value='Okemwa'>Okemwa</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          { isPending && <button disabled>Add Blog..</button>}
        </form>
    </div>
  )
}

export default Create
