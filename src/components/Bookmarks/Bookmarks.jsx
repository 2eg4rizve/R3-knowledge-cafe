/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (

        <div className="md: w-1/3 bg-gray-200 p-[10px]">

            <h3 className="text-4xl mb-[20px] text-center">
                readingTime : {readingTime}
            </h3>
            <h1 className="text-4xl text-center">
                Bookmarked Blogs : {bookmarks.length}
            </h1>

            {
                bookmarks.map((bookmark, idx) =>
                    <Bookmark
                        key={idx}
                        bookmark={bookmark}

                    ></Bookmark>)
            }

        </div>
    )
}

export default Bookmarks;