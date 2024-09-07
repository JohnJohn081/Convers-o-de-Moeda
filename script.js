document.getElementById('btn').addEventListener('click', function(){

    const valor = document.getElementById('valor').value
    const moeda = document.getElementById('moedas').value
    var elementResultado = document.getElementById('result')
    var resultado = 0
    elementResultado.innerHTML = '';

    switch(moeda){
        case "USD": 
            resultado = valor * 5.61
            console.log('$' + valor + ' = ' + resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
            elementResultado.innerHTML += ` $ ${valor} = ${resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}  `;
            break;
        case "EUR":
            resultado = valor * 6.24
            console.log('€' + valor + ' = ' + resultado.toLocaleString('pt-br',{style: 'currency', currency: 'EUR'}))
            elementResultado.innerHTML += ` € ${valor} = ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            break;
        case "GBP":
            resultado = valor * 7.37
            console.log('£' + valor + ' = ' + resultado.toLocaleString('pt-br', {style: 'currency', currency: 'GBP'}))
            elementResultado.innerHTML += ` £ ${valor} = ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            break;
        case "CAD":
            resultado = valor * 4.19
            console.log('C$' + valor + ' = ' + resultado.toLocaleString('pt-br', {style: 'currency', currency: 'CAD'}))
            elementResultado.innerHTML += ` CA$ ${valor} = ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            break;
        case "MXN":
            resultado = valor * 0.29
            console.log('MX$' + valor + ' = ' + resultado.toLocaleString('pt-br', {style: 'currency', currency: 'MXN'}))
            elementResultado.innerHTML += `MX$ ${valor} = ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            

    }
    console.log('Quantidade: ' + valor)
    console.log('Moeda: ' + moeda)
})