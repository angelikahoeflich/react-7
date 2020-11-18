import React from 'react'

const HigherOrderComponent = WrappedComponent => {

  const location: {};
  const match = {};
  const history = {};


  return(props) => {
    return (
    <WrappedComponent {...props}
    location={location}
    match={match}
    history={history}/>
    )
  }


}

export default HigherOrderComponent