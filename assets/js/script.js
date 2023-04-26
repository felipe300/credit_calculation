const btnSubmit = document.getElementById("btnSubmit")

const calculate = () => {
	let total = parseInt(document.getElementById("loanAmount").value)
	let interest = parseInt(document.getElementById("interestRate").value)
	let term = parseInt(document.getElementById("loanTerm").value)
	validation(total, interest, term)

	message(total, interest, term)
}

const calculator =
	(total, interest, term) => (total / term) * ((100 + interest) / 100)

const validation = (total, interest, term) => {
	if (total < 0 || interest < 0 || term < 0) {
		alert("No se puede ingresar valores menores a '0'")
		throw new Error("No se puede ingresar valores menores a '0'")
	}

	if (isNaN(total) || isNaN(interest) || isNaN(term)) {
		alert("Por favor, ingrese todos los datos")
		throw new Error("Por favor, ingrese todos los datos")
	}

}

const message = (total, interest, term) => {
	let msn = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${term} CUOTAS DE $${Math.round(calculator(total, interest, term))}`
	document.getElementById("totalAmount").innerText = msn
}

btnSubmit.addEventListener("click", (e) => {
	e.preventDefault()
	calculate()
})
