
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log("bookmark adding soon");
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) => {
    console.log("marking as read", time);
    setReadingTime(readingTime+time);
    //remove the red blog from bookmark

    console.log("Remove Bokemark ",id);

    const remainingBookmarks =bookmarks.filter(bookmark => bookmark.id!== id);

    setbookmarks(remainingBookmarks);


  }



  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>

        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}>

        </Blogs>

        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
