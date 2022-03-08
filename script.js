function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorMoeda = Number(valor);

    let valorReal = valorMoeda * 5.06;

    let elemento = document.getElementById("valorConvertido");

    let valorConvertido = "O valor em real é<br>R$ " + valorReal.toFixed(2);
    elemento.innerHTML = valorConvertido;
}

function Converter2() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorMoeda = Number(valor);

    let valorDolar = valorMoeda / 5.06;

    let elemento = document.getElementById("valorConvertido");

    let valorConvertido = "O valor em dolar é<br>U$ " + valorDolar.toFixed(2);
    elemento.innerHTML = valorConvertido;
}