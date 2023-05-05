import React from 'react'
import { Button } from 'react-bootstrap'
import Cardx from '../../components/Cardx'

function Home() {
  return (
   <div >
    <div className='mt-5 fs-1 fw-bold bg-blue text-primary'>
      Pokedex App
    </div>
    <Cardx/>
   </div>
  )
}

export default Home