import React,{Component} from 'react'
import './App.css'
import BooksApp from './BooksApp'
import * as BooksAPI from './utils/BooksAPI'
import {Route} from 'react-router-dom'
import SearchBook from './searchBook'


class App extends Component{
state={
    books:[],
    showloader:true
}
componentDidMount(){
   this.getAllBooks()
}
/*
fetch all the book records
*/
getAllBooks=()=>{
     BooksAPI.getAll()
    .then((books)=>
         {
        this.setState({showloader:false})
        this.setState(()=>({
            books
        }))
    })
}
/*
This function updates the book obj  and move it to the respective shelf
book: book obj to be updated
id: used to fetch the shelf of the book to be updated.
*/
moveTo=(book,id)=>{
    this.setState({showloader:true})
    let shelf=document.getElementById(id).value
    
    BooksAPI.update(book, shelf)
    .then(
    
    this.getAllBooks()
    )
}

    render(){
        var shown = {
			display: this.state.showloader ? "block" : "none"
		};
        return(
        <div>
          
         <Route exact path='/' render={()=>(
            <BooksApp books={this.state.books} onMoveTo={this.moveTo}/>
           )}/>
           <Route exact path='/search' render={()=>(
            <SearchBook books={this.state.books} onMoveTo={this.moveTo}/>
           )}/>
        <div style={shown}className="loaderCls"><div className="loader"></div></div>
        </div>    
        )
    }
}

export default App
