import React,{Component} from 'react'

import BookData from './BookData'

class BookShelf extends Component{
  

    render(){
       const{books,onMoveTo,catType,title}=this.props
       return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title }</h2>
                  <div className="bookshelf-books">
                    {
                    books.length>0 && (<BookData catType={catType}booksArr={books} onMoveTo={onMoveTo}/>)
                    }
                 </div>
                </div>
             )
        }
}

export default BookShelf;