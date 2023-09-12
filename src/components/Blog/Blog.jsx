/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const {id, title, cover, author, author_img, posted_date, hashtags,reading_time } = blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full mb-10 h-[300px]' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between'>
                <div className='flex gap-5 mb-4'>
                    <img className='w-14' src={author_img} alt="" />

                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-[10px]'>< FaBookmark></FaBookmark></button>

                </div>

            </div>

            <h1 className='font-bold text-[25px] mb-4'>{title}</h1>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button
                onClick={() => handleMarkAsRead(id,reading_time)}
                className='font-bold text-purple-700 underline'
            >Mark As Read</button>

        </div>
    );
};

// Blog.PropTypes = {
//     blog: PropTypes.object.isRequired,
//     handleAddToBookmark: PropTypes.func

// }
export default Blog;