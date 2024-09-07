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
            conversão(moeda, valor, 5.60); 
            break;
        case "€":
            conversão(moeda, valor, 6.19); 
            break;
        case "£":
            conversão(moeda, valor, 7.35); 
            break;
        case "C$":
            conversão(moeda, valor, 4.11); 
            break;
        case "MX$":
            conversão(moeda, valor, 0.28); 
            break;
        case "¥":
            conversão(moeda, valor, 0.052); 
            break;
        case "₹":
            conversão(moeda, valor, 0.075); 
            break;
        case "R$":
            conversão(moeda, valor, 1.00); 
            break;
        case "A$":
            conversão(moeda, valor, 3.90); 
            break;
        case "CHF":
            conversão(moeda, valor, 6.10); 
            break;
        case "₽":
            conversão(moeda, valor, 0.071); 
            break;
        case "₺":
            conversão(moeda, valor, 0.25); 
            break;
        case "₩":
            conversão(moeda, valor, 0.0045); 
            break;
        case "₪":
            conversão(moeda, valor, 1.50); 
            break;
        case "R":
            conversão(moeda, valor, 0.30); 
            break;
        case "₫":
            conversão(moeda, valor, 0.00023); 
            break;
        case "kr":
            conversão(moeda, valor, 0.54); 
            break;
        case "S$":
            conversão(moeda, valor, 4.20); 
            break;
        case "HK$":
            conversão(moeda, valor, 0.72); 
            break;
        case "NZ$":
            conversão(moeda, valor, 3.65); 
            break;
        case "₱":
            conversão(moeda, valor, 0.11); 
            break;
        case "Kč":
            conversão(moeda, valor, 0.26); 
            break;
        case "zł":
            conversão(moeda, valor, 1.38); 
            break;
        case "lei":
            conversão(moeda, valor, 1.23); 
            break;
        case "฿":
            conversão(moeda, valor, 0.16); 
            break;
        case "₦":
            conversão(moeda, valor, 0.013); 
            break;
        case "₴":
            conversão(moeda, valor, 0.15); 
            break;
        case "₭":
            conversão(moeda, valor, 0.00030); 
            break;
        default:
            console.log("Moeda não encontrada");
    }
    

})