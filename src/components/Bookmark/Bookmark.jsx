import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='mt-10 bg-blue-400'>
            <h3 >{title}</h3>
        </div>
    );
};

Bookmark.propType = {
    bookmark:PropTypes.object
}

export default Bookmark;