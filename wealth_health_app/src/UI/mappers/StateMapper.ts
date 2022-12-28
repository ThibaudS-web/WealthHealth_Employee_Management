import SelectState from "../../models/SelectState"
import State from "../../models/State"

class StateMapper {
	mapState(state: State) {
		return new SelectState(state.name[0].toUpperCase() + state.name.slice(1), state.name)
	}
}

export default StateMapper
