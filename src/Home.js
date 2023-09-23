import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    
    // const handleDeletion = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            <h1>Home</h1>
            { error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} /> }
        </div>
     );
}
 
export default Home;