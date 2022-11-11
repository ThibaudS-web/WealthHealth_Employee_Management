import SelectState from "../../models/SelectState"
import State from "../../models/State"

class StateMapper {
	mapState(state: State) {
		return new SelectState(state.name.toLocaleLowerCase(), state.name)
	}
}

export default StateMapper
