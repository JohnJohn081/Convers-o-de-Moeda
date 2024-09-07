document.getElementById('btn').addEventListener('click', function(){

    const valor = document.getElementById('valor').value
    const moeda = document.getElementById('moedas').value
    var elementResultado = document.getElementById('result')
    elementResultado.innerHTML = '';
    
    function conversão(moeda, valor, valueMoeda){
        elementResultado.innerHTML += ` ${moeda}${valor} = ${(valor * valueMoeda).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
    
    console.log('Quantidade: ' + valor)
    console.log('Moeda: ' + moeda)
    switch(moeda){
        case "$":
            conversão(moeda, valor, 5.60)
            break;
        case "€":
            conversão(moeda, valor, 6.19)
            break;
        case "£":
            conversão(moeda, valor, 7.35)
            break;
        case "C$":
            conversão(moeda, valor, 4.11)
            break;
        case "MX$":
            conversão(moeda, valor, 0.28)
            break;
    }

})