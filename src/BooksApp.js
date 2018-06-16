import React from 'react'
import BookShelf from './BookShelf'
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const BooksApp=(props)=>{
    
     const {books,onMoveTo}= props
    return(
    
     <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>    
             <BookShelf title={"Currently Reading"}catType={'currentlyReading'} books={books} onMoveTo={onMoveTo}/>
             <BookShelf title={"Want to Read"}catType={'wantToRead'} books={books} onMoveTo={onMoveTo}/> 
             <BookShelf title={"Read"} catType={'read'} books={books} onMoveTo={onMoveTo}/>
             </div>
             <div className="open-search"> 
                <Link
                to="/search"
                >Search</Link>
                </div>    
            </div>
    </div>
        
    )
    
    
}
BooksApp.propTypes={
    books:PropTypes.array.isRequired,
    onMoveTo:PropTypes.func.isRequired
}
export default BooksApp