import React from 'react';

const Bookdata=(props)=>{
    
    const {booksArr, onMoveTo,catType,bookshelfdata}= props

    let shelfArr=[{key:"currentlyReading",value:"Currently Reading"},
                  {key:"wantToRead",value:"Want to Read"},
                  {key:"read",value:"Read"},
                  {key:"none",value:"None"}];
    const getBookShelf=(id)=>{
            let bookShelf="none"
            let books=bookshelfdata===undefined?booksArr:bookshelfdata
            books.forEach((book)=>{
                if(book.id===id)
                {
                    bookShelf=  book.shelf;
                   
                   return bookShelf;
                    
                }
            });
          
        return bookShelf;
        
    
        }
       
        return(
         
            <ol className="books-grid">
           { booksArr.map((book)=>(
                
                    (book.shelf=== undefined?true:book.shelf===catType) &&(
               
               <li  key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks===undefined?"":book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf=== undefined?getBookShelf(book.id): book.shelf} id={book.id} onChange={()=>onMoveTo(book,book.id)}>
                                <option  disabled>Move to...</option>
                                {
                                    shelfArr.map((opt)=>{
                                  return opt.key===(book.shelf=== undefined?getBookShelf(book.id): book.shelf)?<option key={opt.key+""+book.id} value={opt.key}>&#10004; {opt.value}</option>:<option key={opt.key+""+book.id} value={opt.key}>{opt.value}</option>
                                })}
                               
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
             </li>
                 )))}
        </ol>


        )
}

export default Bookdata;
