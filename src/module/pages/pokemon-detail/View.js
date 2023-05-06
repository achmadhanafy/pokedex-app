import React from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetail({location}) {
 const { name } = useParams()
  return (
    <div>PokemonDetail</div>
  )
}

export default PokemonDetail