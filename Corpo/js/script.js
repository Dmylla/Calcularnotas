function soma(n1, n2, n3) {
    return n1 + n2 + n3
}

function verificar() {
    const numero1 = Number(document.getElementById("nota1").value)
    const numero2 = Number(document.getElementById("nota2").value)
    const numero3 = Number(document.getElementById("nota3").value)

    const total = soma(numero1, numero2, numero3)
    const resultado = (document.getElementById("resultado"))

    if (isNaN(total)) {
        resultado.textContent = "Faltam informações"
    } else if(total>=21) {
        resultado.textContent = "Voce foi aprovado"
        resultado.style.color = "green"
    } else {
        resultado.textContent = "Voce foi reprovado"
        resultado.style.color = "red"
    }
}