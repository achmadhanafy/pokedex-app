import { connect } from "react-redux"
import View from './View'
import { getPokemons } from "../../redux/pokemon/pokemonAction"

const mapStateToProps = (state) => ({
 pokemon: state.pokemon
})

const mapDispatchToProps = {
 getPokemons: (payload) => getPokemons(payload)
}

export default connect(mapStateToProps, mapDispatchToProps)(View)