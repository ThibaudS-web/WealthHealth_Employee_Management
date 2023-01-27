let initNumber = 0
//This function should color one out of two rows of the table a different color.
function colorRow() {
	if (initNumber % 2) {
		initNumber++
		return { backgroundColor: "#d4dea3" }
	}
	initNumber++
	return { backgroundColor: "#ffffff" }
}

export default colorRow
