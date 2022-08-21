// Formata o Contato

const tel = document.getElementById('phone')

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, '')
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2')
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2')
    tel.value = valor
}


 
// // * Volta a Tela Inicial

// function retornar() {
//     window.location = "../index.html"
// }
