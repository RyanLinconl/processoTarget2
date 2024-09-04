const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarLetraA(texto) {
    const textoMinusculo = texto.toLowerCase();
    
    const quantidade = (textoMinusculo.match(/a/g) || []).length;
    
    const existe = quantidade > 0;
    
    console.log(`A letra 'a' ${existe ? 'está' : 'não está'} presente na string.`);
    console.log(`Quantidade de vezes que a letra 'a' ocorre: ${quantidade}`);
}
rl.question('Digite uma string para verificar a letra "a": ', (entrada) => {
    verificarLetraA(entrada);

    rl.close();
});