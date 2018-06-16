import React from 'react';

const Bookdata=(props)=>{
    
    const {booksArr, onMoveTo,catType,bookshelfdata}= props
    const getBookShelf=(id)=>{
            let bookShelf="none"
            bookshelfdata.forEach((book)=>{
                if(book.id===id)
                {
                    bookShelf=  book.shelf;
                   return;
                    
                }
            });
        return bookShelf;
        
    
        }
    const setSelectedValue=(selid)=>{
        
        let id=document.getElementById(selid);
        console.log("index "+ id.selectedIndex);
        for(let i=1;i<=4;i++)
               {
           let selctedText=id.options[i];
           let val=selctedText.attributes[0].value
           
              selctedText.innerHTML=(i===id.selectedIndex)?"&#10004; "+val: val
                   console.log("text "+ selctedText.text);
               }
    }
        return(
            <ol className="books-grid">
           { booksArr.map((book)=>(
                 
                    (book.shelf=== undefined?true:book.shelf===catType) &&(

               <li  key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                              <select onClick={()=>setSelectedValue(book.id)} value={book.shelf=== undefined?getBookShelf(book.id):book.shelf} id={book.id} onChange={()=>onMoveTo(book,book.id)}>
                                <option  disabled>Move to...</option>
                                <option name="Currently Reading" value="currentlyReading">Currently Reading</option>
                                <option name="Want to Read"value="wantToRead">Want to Read</option>
                                <option name="Read"value="read">Read</option>
                                <option name="None"value="none">None</option>
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
