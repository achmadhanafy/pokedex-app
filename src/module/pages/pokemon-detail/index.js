import { connect } from "react-redux"
import View from './View'
import { getPokemons } from "../../redux/pokemon/pokemonAction"
import { getHabitatDetail, getHabitats } from "../../redux/habitat/habitatAction"

const mapStateToProps = (state) => ({
 pokemon: state.pokemon,
 habitat: state.habitat
})

const mapDispatchToProps = {
 getPokemons: (payload) => getPokemons(payload),
 getHabitats: (payload) => getHabitats(payload),
 getHabitatDetail: (payload) => getHabitatDetail(payload)
}

export default connect(mapStateToProps, mapDispatchToProps)(View)