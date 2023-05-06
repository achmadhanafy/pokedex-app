import { connect } from "react-redux"
import View from './View'
import { getPokemonDetail } from "../../redux/pokemon/pokemonAction"

const mapStateToProps = (state) => ({
 pokemon: state.pokemon,
})

const mapDispatchToProps = {
 getPokemonDetail: (payload) => getPokemonDetail(payload),
}

export default connect(mapStateToProps, mapDispatchToProps)(View)