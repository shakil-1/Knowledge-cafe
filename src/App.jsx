import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handelToBookMark = blog =>{
    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  
  const handelMardAsread = (time, id) =>{
    setReadingTime(readingTime + time)
    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reaminingBookmarks)
  }

  return (
  <>
  <Header></Header>

 
  <div className="md:flex max-w-7xl mx-auto">
  <Blogs handelToBookMark={handelToBookMark} handelMardAsread={handelMardAsread}></Blogs>
  <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
  </div>
  </>
  )
}

export default App
