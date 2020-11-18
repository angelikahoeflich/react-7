import {Component} from 'react'

export default class classMovieList extends Component{
  constructor(){
    super()

    this.state={
      movies:['shrek', 'shrek2', 'shreck the third'],
      input: ''
    }
  }

  render(){

    const mappedMovies = this.state.movies.map((movie,index)=> {
      return <h2 key={movie + index}>{movie}</h2>
    })
    return(
      <div>
        {mappedMovies}
        <input 
          type="text"
          value={this.state.input}
          onChange={()=> this.setState({input: e.target.value})}/>
        <button 
        onClick={() => {
          this.setState({movies: [...this.state.movies, input], input: ''})
        }}>Add Movie</button>
      </div>
    )
  }
}