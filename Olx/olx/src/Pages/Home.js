import React from 'react'
import Header from '../Components/Header/Header'

function Home({active,setActive}) {
  return (
    <div>
        <Header active={active} setActive={setActive} />
    </div>
  )
}

export default Home