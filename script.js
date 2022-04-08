function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorMoeda = Number(valor);

    let valorReal = valorMoeda * 4.71;

    let elemento = document.getElementById("valorConvertido");

    let valorConvertido = "O valor em real é<br>R$ " + valorReal.toFixed(2);
    elemento.innerHTML = valorConvertido;

    valorElemento.focus();
}

function Converter2() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorMoeda = Number(valor);

    let valorDolar = valorMoeda / 4.71;

    let elemento = document.getElementById("valorConvertido");

    let valorConvertido = "O valor em dolar é<br>U$ " + valorDolar.toFixed(2);
    elemento.innerHTML = valorConvertido;

    valorElemento.focus();
}