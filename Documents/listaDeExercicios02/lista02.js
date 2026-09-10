// 1. Exibir números de 1 a 10 com 'for'
document.getElementById("ex1_btn").onclick = function() {
    let saida = "";
    for (let i = 1; i <= 10; i++) {
        saida += i + " ";
        console.log(i); // Também exibe no console
    }
    document.getElementById("ex1_res").textContent = saida;
};

// 2. Tabuada de um número com 'for'
document.getElementById("ex2_btn").onclick = function() {
    const num = parseInt(document.getElementById("ex2_num").value) || 5;
    let saida = `Tabuada do ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
        let res = `${num} x ${i} = ${num * i}`;
        saida += res + "\n";
        console.log(res);
    }
    document.getElementById("ex2_res").textContent = saida;
};

// 3. Soma de 1 a 100 com 'while'
document.getElementById("ex3_btn").onclick = function() {
    let i = 1;
    let soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    console.log("Soma de 1 a 100:", soma);
    document.getElementById("ex3_res").textContent = "Soma acumulada (1 a 100): " + soma;
};

// 4. Números pares de 0 a 20 com 'while'
document.getElementById("ex4_btn").onclick = function() {
    let i = 0;
    let saida = "";
    while (i <= 20) {
        if (i % 2 === 0) {
            saida += i + " ";
            console.log("Par:", i);
        }
        i++;
    }
    document.getElementById("ex4_res").textContent = "Pares: " + saida;
};

// 5. Contagem regressiva de 10 a 1 com 'do...while'
document.getElementById("ex5_btn").onclick = function() {
    let i = 10;
    let saida = "";
    do {
        saida += i + " ";
        console.log("Contagem:", i);
        i--;
    } while (i >= 1);
    document.getElementById("ex5_res").textContent = "Regressiva: " + saida;
};

// 6. Percorrer objeto de usuário com 'for...in'
document.getElementById("ex6_btn").onclick = function() {
    let usuario = {
        nome: "Gabriel",
        idade: 22,
        cargo: "Desenvolvedor",
        cidade: "Salvador"
    };
    let saida = "";
    for (let chave in usuario) {
        let linha = `${chave}: ${usuario[chave]}`;
        saida += linha + "\n";
        console.log(linha);
    }
    document.getElementById("ex6_res").textContent = saida;
};

// 7. Média de notas de um array usando 'for...of'
document.getElementById("ex7_btn").onclick = function() {
    let notas = [8.5, 7.0, 9.5, 6.0];
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    let media = soma / notas.length;
    console.log("Média das notas:", media);
    document.getElementById("ex7_res").textContent = `Notas: ${notas.join(", ")}\nMédia: ${media.toFixed(2)}`;
};

// 8. Números ímpares de 1 a 50
document.getElementById("ex8_btn").onclick = function() {
    let saida = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            saida += i + " ";
            console.log("Ímpar:", i);
        }
    }
    document.getElementById("ex8_res").textContent = "Ímpares: " + saida;
};

// 9. Contagem regressiva de 10 a 0
document.getElementById("ex9_btn").onclick = function() {
    let i = 10;
    let saida = "";
    while (i >= 0) {
        saida += i + " ";
        console.log("Regressiva:", i);
        i--;
    }
    document.getElementById("ex9_res").textContent = "Contador: " + saida;
};