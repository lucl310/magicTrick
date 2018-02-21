var pushes = 0

console.log('i work')

function click() {
	var pushes = pushes + 1
	console.log("I work")
}
function unclick() {
	
	if (pushes >= 1) {
	var pushes = pushes - 1
	}
}
