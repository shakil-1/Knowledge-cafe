import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";


const Blogs = ({handelToBookMark, handelMardAsread}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div  className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handelToBookMark={handelToBookMark} handelMardAsread={handelMardAsread}></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    
    handelToBookMark: PropTypes.func.isRequired,
    handelMardAsread: PropTypes.func.isRequired,
  };
export default Blogs;