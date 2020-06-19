alert('Olá boa noite!');
window.prompt('Qual seu nome?');
let CPF = window.prompt('Qual seu CPF?');
if (CPF <= 99999999999) {
    alert('Seja Bem Vindo');
} else {
    alert('CPF não localizado')
}
let Pedidos = window.prompt('Encontramos O pedido 36, o pedido 85 e o pedido 104 em seu CPF, qual deseja saber mais?');
if (Pedidos = 36 || 85 || 104) {
    alert('Vamos Localiza-lo, aguarde...')
} else {
    alert('Numero de pedido não localizado para este CPF')
    let Pedidos = window.prompt('Por favor, digite o numero do seu pedido');
    if (Pedidos = 36 || 85 || 104) {
        alert('Vamos Localiza-lo, aguarde...')
    } else {
        alert('Pedido não localizado, por favor contate nosso suporte')
    }
}