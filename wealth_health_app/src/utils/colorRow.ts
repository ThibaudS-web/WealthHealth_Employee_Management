let initNumber = 0

function colorRow() {
	if (initNumber % 2) {
		initNumber++
		return { backgroundColor: "#d4dea3" }
	}
	initNumber++
	return { backgroundColor: "#ffffff" }
}

export default colorRow
