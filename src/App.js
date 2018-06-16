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