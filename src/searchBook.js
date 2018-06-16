import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookData from './BookData'
class SearchBook extends Component{
    state={
       
        items:[]
    }

searchQuery=(val)=>{
  
    
    if(val.length>0)
    {
        BooksAPI.search(val)
        .then((items)=>(
        this.setState(()=>({
                items
            }))

        ))
    }else{
        this.setState({items:[]});
    }
}
 
    render(){
        const{items}=this.state;
        const  {onMoveTo,books} = this.props
        return(
            
             <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
               <input type="text" placeholder="Search by title or author"  onChange={(event)=>this.searchQuery(event.target.value)}/>

              </div>
            </div>
            <div id="searchDiv" className="search-books-results">
             {
                    items.length>0 && (<BookData bookshelfdata={books} booksArr={items} onMoveTo={onMoveTo}/>)
            }
            </div>
          </div>
        )
    }
}

export default SearchBook