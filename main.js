const form = document.getElementById('form-comparar');
const A = document.getElementById('numero-a');
const B = document.getElementById('numero-b');
let formEvalido =  false;

function validaNumero(A,B) {
    return parseInt(A) < parseInt(B);
}

form.addEventListener('submit', function(e) {
    A.focus();
    e.preventDefault();
    
    const mensagemSucesso = `O número (B = <b>${B.value})</b> é maior que (A = <b>${A.value}</b>) formulário válido.`;
    formEvalido = validaNumero(A.value,B.value);
    if (formEvalido) {
        const containermenssagemSucesso = document.querySelector('.success-message');
        containermenssagemSucesso.innerHTML = mensagemSucesso;
        containermenssagemSucesso.style.display = 'block'
        
        A.value = '';
        B.value = '';
    } else {
        A.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

B.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    B.value = e.target.value
    formEvalido = validaNumero(A.value,B.value);

    if (!formEvalido) {
        A.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.getElementById('btn-validar').disabled = true
    } else {
        A.style = '';
        document.querySelector('.error-message').style.display = 'none';
        document.getElementById('btn-validar').disabled = false
    }
});
