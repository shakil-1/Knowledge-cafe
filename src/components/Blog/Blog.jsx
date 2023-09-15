import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog ,handelToBookMark, handelMardAsread}) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt={`Cover pictur of the title ${title}`} />
      <div className="flex justify-between">
        <div  className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p> {posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={()=> handelToBookMark(blog)} className="ml-2 text-gray-600"> <FaBookmark></FaBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
      <button onClick={()=>handelMardAsread(reading_time, id)} className="text-purple-800 font-bold underline" >Mark As Read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelToBookMark: PropTypes.func.isRequired,
  handelMardAsread: PropTypes.func.isRequired,
};
export default Blog;
