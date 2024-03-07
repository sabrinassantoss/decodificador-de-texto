let textInput = document.querySelector("#input-texto");
let outPut = document.querySelector("#output");

function criptografar() {
    let texto = textInput.value;

    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly class="input-texto">' + resultCripto
        + '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly class="input-texto">' + resultDescripto
        + '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    let textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert('Texto foi copiado.');
}