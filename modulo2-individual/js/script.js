// mostra input incremento ao clicar em cifra de cesar
document.querySelector('#cesar').onclick = function() {
    document.querySelector('#incremento').style.display = "block";
    document.querySelector('#codificarB').setAttribute('onclick','cesar()');
    document.querySelector('#decodificarB').setAttribute('onclick','cesar()');
};

// esconde input incremento ao clicar em base64
document.querySelector('#base64').onclick = function() {
    document.querySelector('#incremento').style.display = "none";
    document.querySelector('#codificarB').setAttribute('onclick','base64()');
    document.querySelector('#decodificarB').setAttribute('onclick','base64()');
};

// mostra button codificar e esconde button decodificar ao clicar em codificar
document.querySelector('#codificar').onclick = function() {
    document.querySelector('#codificarB').style.display = "block";
    document.querySelector('#decodificarB').style.display = "none";
};

// mostra button decodificar e esconde button codificar ao clicar em codificar
document.querySelector('#decodificar').onclick = function() {
    document.querySelector('#codificarB').style.display = "none";
    document.querySelector('#decodificarB').style.display = "block";
};

// variaveis
const alfabeto =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var codTexto = [];
var decodTexto = [];

// funcoes
function alerta() {
    alert('Nenhum padrão de codificação foi selecionado. Escolha um e tente novamente.');
};

function base64() {
    if (document.querySelector('#codificar').checked) {
        var codTexto = btoa(document.querySelector('#texto').value);

        if (codTexto == ''){
            alert('O campo texto está vazio.');
        } else {
            var resultado = document.querySelector('.resultado').querySelector('h2');
            resultado.innerText = codTexto;
        };
    } else {
        var decodTexto = atob(document.querySelector('#texto').value);
        
        if (codTexto == ''){
            alert('O campo texto está vazio.');
        } else {
            var resultado = document.querySelector('.resultado').querySelector('h2');
            resultado.innerText = decodTexto;
        }
    }
}

function cesar() {
    var texto = document.querySelector('#texto').value.toLowerCase().split('');
    var incremento = parseInt(document.querySelector('#incremento').value);
    
    if (document.querySelector('#codificar').checked) {
        if (texto == '') {
            alert('O campo texto está vazio.');
        } else {
            for (var i = 0; i < texto.length; i++) {
                if (alfabeto.includes(texto[i]) && !isNaN(incremento)) {
                    for (var j = 0; j < alfabeto.length; j++) {
                        if (texto[i] == alfabeto[j]) {
                            codTexto[i] = alfabeto[(i + incremento) % alfabeto.length];
                        };
                    };
                } else if (isNaN(incremento)) {
                    alert('Insira um incremento corretamente.');
                    break;
                } else if (!alfabeto.includes(texto[i]) && texto[i] != ' ') {
                    alert('Insira apenas letras do alfabeto americano de A a Z.')
                    document.querySelector('#texto').value = '';
                    break;
                } else if (!alfabeto.includes(texto[i]) && texto[i] == ' ') {
                    codTexto[i] += ' ';
                };
            };
        };

        var resultado = document.querySelector('.resultado').querySelector('h2');
        resultado.innerText = codTexto.join('');
    } else {
        if (texto == "") {
            alert('O campo texto está vazio.');
        } else {
            for (var i = 0; i < texto.length; i++) {
                if (alfabeto.includes(texto[i]) && !isNaN(incremento)) {
                    for (var j = 0; j < alfabeto.length; j++) {
                        if (texto[i] == alfabeto[j]) {
                            decodTexto[i] = alfabeto[(j - incremento) % alfabeto.length];
                        };
                    };
                } else if (isNaN(incremento)) {
                    alert('Insira um incremento corretamente.');
                    break;
                } else if (!alfabeto.includes(texto[i]) && texto[i] != ' ') {
                    alert('Insira apenas letras do alfabeto american de A a Z.')
                    break;
                } else {
                    decodTexto[i] = ' ';
                };
            };
        };

        var resultado = document.querySelector('.resultado').querySelector('h2');
        resultado.innerText = decodTexto.join('');
    };
};