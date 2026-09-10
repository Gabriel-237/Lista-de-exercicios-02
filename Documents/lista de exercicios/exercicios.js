// Q1: Média do Aluno
document.getElementById("q1_btn").onclick = function() {
    const n1 = parseFloat(document.getElementById("q1_nota1").value);
    const n2 = parseFloat(document.getElementById("q1_nota2").value);
    const media = (n1 + n2) / 2;
    document.getElementById("q1_resultado").textContent = media >= 7 ? "Aprovado com média " + media.toFixed(1) : "Não aprovado com média " + media.toFixed(1);
};

// Q2: Verificação de Idade
document.getElementById("q2_verificar").onclick = function() {
    const idade = parseInt(document.getElementById("q2_idade").value);
    document.getElementById("q2_mensagem").textContent = idade >= 18 ? "Acesso permitido ao conteúdo." : "Acesso restrito para menores.";
};

// Q3: Temperatura do Servidor
document.getElementById("q3_analisar").onclick = function() {
    const temp = parseFloat(document.getElementById("q3_temperatura").value);
    const alerta = document.getElementById("q3_alerta");
    if (temp > 30) {
        alerta.textContent = "ALERTA: Temperatura acima do limite!";
        alerta.style.color = "red";
    } else {
        alerta.textContent = "Temperatura normal.";
        alerta.style.color = "green";
    }
};

// Q4: Desconto de Compra
document.getElementById("q4_calcular").onclick = function() {
    let valor = parseFloat(document.getElementById("q4_valorCompra").value);
    if (valor >= 200) valor *= 0.9;
    document.getElementById("q4_resultado").textContent = "Valor final: R$ " + valor.toFixed(2);
};

// Q5: Situação Escolar
document.getElementById("q5_verificar").onclick = function() {
    const media = parseFloat(document.getElementById("q5_media").value);
    document.getElementById("q5_situacao").textContent = media >= 6 ? "Aprovado" : "Reprovado";
};

// Q6: Controle de Acesso
document.getElementById("q6_acessar").onclick = function() {
    const nome = document.getElementById("q6_nome").value;
    const idade = parseInt(document.getElementById("q6_idade").value);
    document.getElementById("q6_resultado").textContent = idade >= 18 ? "Acesso permitido para " + nome : "Acesso negado para " + nome;
};

// Q7: Consumo de Energia
document.getElementById("q7_classificar").onclick = function() {
    const c = parseFloat(document.getElementById("q7_consumo").value);
    let res = "";
    if (c <= 100) res = "Consumo baixo";
    else if (c <= 200) res = "Consumo moderado";
    else res = "Consumo alto";
    document.getElementById("q7_resultado").textContent = res;
};

// Q8: Validação de Senha
document.getElementById("q8_validar").onclick = function() {
    const senha = document.getElementById("q8_senha").value;
    document.getElementById("q8_resultado").textContent = senha.length >= 8 ? "Senha válida" : "Senha deve ter pelo menos 8 caracteres";
};

// Q9: Cálculo de Frete
document.getElementById("q9_frete").onclick = function() {
    const v = parseFloat(document.getElementById("q9_compra").value);
    document.getElementById("q9_resultado").textContent = v >= 150 ? "Frete Grátis!" : "Valor do frete: R$ 25,00";
};

// Q10: Celsius para Fahrenheit
document.getElementById("q10_converter").onclick = function() {
    const c = parseFloat(document.getElementById("q10_celsius").value);
    const f = (c * 9/5) + 32;
    document.getElementById("q10_resultado").textContent = f + " °F - " + (f > 86 ? "Temperatura Alta" : "Temperatura Normal");
};

// Q11: Controle de Estoque
document.getElementById("q11_verificar").onclick = function() {
    const q = parseInt(document.getElementById("q11_estoque").value);
    const el = document.getElementById("q11_resultado");
    el.textContent = q < 10 ? "Alerta: Estoque baixo!" : "Estoque suficiente.";
    el.style.color = q < 10 ? "red" : "green";
};

// Q12: Votação Eletrônica
document.getElementById("q12_participar").onclick = function() {
    const idade = parseInt(document.getElementById("q12_idade").value);
    document.getElementById("q12_resultado").textContent = (idade >= 16 && idade <= 70) ? "Apto a votar." : "Fora da faixa etária.";
};

// Q13: Avaliação do Cliente
document.getElementById("q13_avaliar").onclick = function() {
    const nota = parseInt(document.getElementById("q13_nota").value);
    document.getElementById("q13_resultado").textContent = nota >= 4 ? "Avaliação Positiva!" : "Avaliação em Análise.";
};

// Q14: Salário com Desconto
document.getElementById("q14_calcular").onclick = function() {
    const salario = parseFloat(document.getElementById("q14_salario").value);
    const final = salario * 0.92;
    document.getElementById("q14_resultado").textContent = "Salário Líquido: R$ " + final.toFixed(2);
};

// Q15: Radar de Velocidade
document.getElementById("q15_verificar").onclick = function() {
    const v = parseFloat(document.getElementById("q15_velocidade").value);
    document.getElementById("q15_resultado").textContent = v <= 60 ? "Velocidade permitida." : "Velocidade acima do limite!";
};

// Q16: Controle de Frequência
document.getElementById("q16_verificar").onclick = function() {
    const f = parseFloat(document.getElementById("q16_frequencia").value);
    document.getElementById("q16_resultado").textContent = f >= 75 ? "Aprovado por frequência." : "Reprovado por frequência.";
};

// Q17: Classificação de Desempenho
document.getElementById("q17_classificar").onclick = function() {
    const p = parseInt(document.getElementById("q17_pontuacao").value);
    let res = "";
    if (p < 50) res = "Nível inicial";
    else if (p <= 79) res = "Nível intermediário";
    else res = "Nível avançado";
    document.getElementById("q17_resultado").textContent = res;
};

// Q18: Validação de Formulário
document.getElementById("q18_enviar").onclick = function() {
    const nome = document.getElementById("q18_nome").value.trim();
    document.getElementById("q18_mensagem").textContent = nome === "" ? "Por favor, preencha seu nome." : "Cadastro pode prosseguir.";
};

// Q19: Cálculo de Idade
document.getElementById("q19_calcular").onclick = function() {
    const ano = parseInt(document.getElementById("q19_anoNascimento").value);
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;
    document.getElementById("q19_resultado").textContent = "Idade: " + idade + " anos (" + (idade >= 18 ? "Maior de idade" : "Menor de idade") + ")";
};

// Q20: Semáforo Virtual
document.getElementById("q20_vermelho").onclick = function() {
    document.getElementById("q20_orientacao").textContent = "PARE!";
};
document.getElementById("q20_amarelo").onclick = function() {
    document.getElementById("q20_orientacao").textContent = "ATENÇÃO!";
};
document.getElementById("q20_verde").onclick = function() {
    document.getElementById("q20_orientacao").textContent = "SIGA!";
};

// Q21: Tema Claro/Escuro
let temaEscuro = false;
document.getElementById("q21_tema").onclick = function() {
    temaEscuro = !temaEscuro;
    document.body.classList.toggle("dark-theme", temaEscuro);
};

// Q22: Saudação por Período
document.getElementById("q22_mensagem").onclick = function() {
    const p = document.getElementById("q22_periodo").value;
    let msgs = { manha: "Bom dia!", tarde: "Boa tarde!", noite: "Boa noite!" };
    document.getElementById("q22_resultado").textContent = msgs[p];
};

// Q23: Calculadora de IMC
document.getElementById("q23_calcular").onclick = function() {
    const peso = parseFloat(document.getElementById("q23_peso").value);
    const alt = parseFloat(document.getElementById("q23_altura").value);
    const imc = peso / (alt * alt);
    let classif = "";
    if (imc < 18.5) classif = "Abaixo do peso";
    else if (imc < 25) classif = "Peso normal";
    else classif = "Sobrepeso";
    document.getElementById("q23_resultado").textContent = "IMC: " + imc.toFixed(2) + " (" + classif + ")";
};

// Q24: Horário da Biblioteca
document.getElementById("q24_verificar").onclick = function() {
    const h = parseInt(document.getElementById("q24_horario").value);
    document.getElementById("q24_resultado").textContent = (h >= 8 && h <= 22) ? "Biblioteca Aberta" : "Biblioteca Fechada";
};

// Q25: Média de Desempenho
document.getElementById("q25_verificar").onclick = function() {
    const m = parseFloat(document.getElementById("q25_media").value);
    let res = "";
    if (m >= 7) res = "Aprovado";
    else if (m >= 5) res = "Recuperação";
    else res = "Reprovado";
    document.getElementById("q25_resultado").textContent = res;
};

// Q26: Total de Compras
document.getElementById("q26_calcular").onclick = function() {
    const p = parseFloat(document.getElementById("q26_preco").value);
    const q = parseInt(document.getElementById("q26_quantidade").value);
    const total = p * q;
    document.getElementById("q26_resultado").textContent = "Total: R$ " + total.toFixed(2) + " - " + (total >= 300 ? "Frete Grátis!" : "Frete será cobrado.");
};

// Q27: Nível de Bateria
document.getElementById("q27_verificar").onclick = function() {
    const b = parseInt(document.getElementById("q27_bateria").value);
    let res = "";
    if (b <= 20) res = "Bateria crítica";
    else if (b <= 50) res = "Bateria moderada";
    else res = "Bateria suficiente";
    document.getElementById("q27_resultado").textContent = res;
};

// Q28: Inscrição em Evento
document.getElementById("q28_cadastrar").onclick = function() {
    const nome = document.getElementById("q28_nome").value.trim();
    const email = document.getElementById("q28_email").value.trim();
    document.getElementById("q28_resultado").textContent = (nome !== "" && email !== "") ? "Inscrição realizada com sucesso!" : "Preencha todos os campos.";
};

// Q29: Status do Produto
document.getElementById("q29_classificar").onclick = function() {
    const q = parseInt(document.getElementById("q29_quantidade").value);
    let res = "";
    if (q === 0) res = "Produto indisponível";
    else if (q <= 5) res = "Estoque baixo";
    else res = "Estoque disponível";
    document.getElementById("q29_resultado").textContent = res;
};

// Q30: Análise de Crédito
document.getElementById("q30_analisar").onclick = function() {
    const r = parseFloat(document.getElementById("q30_renda").value);
    let res = "";
    if (r < 2000) res = "Análise não aprovada";
    else if (r < 5000) res = "Análise complementar";
    else res = "Análise inicial aprovada";
    document.getElementById("q30_resultado").textContent = res;
};