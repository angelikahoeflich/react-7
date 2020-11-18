import React, {useState} from 'react'

export default () => {
  const [movies, setMovies] = useState(['shrek', 'shrek2', 'shreck the third'])

  const [input, setInput] = useState('')

  // OR const [state, setState] = useState({movies:[], input: ''})

  return(
    <div>
      {movies.map(movie => {
      return <h2 key={movie + index}>{movie}</h2>
    })}
    <input
      value={input}
      type="text"
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={()=>{
      setMovies:([...movies, input])
    }}>Add Movie</button>
    </div>
  )

}