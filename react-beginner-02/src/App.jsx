import React from 'react'
import data from "./components/data"
import Jokes from "./components/Jokes"
function App(){

  const Joke = data.map(item=>
    <Jokes  
    key={item.id}
    {...item}
    
    />
    )
    console.log(Joke)
  return (
    <>
  {Joke}
  </>
  )
}

export default App