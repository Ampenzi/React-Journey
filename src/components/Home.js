import React from 'react'
import useFetch from './useFetch'
import BlogList from './BlogList'

function Home() {
  const{data, isPending, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className='home'>
      {error && <p>{error}</p>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Our Blogs" />}
    </div>
  )
}

export default Home
