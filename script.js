/**function apresentacao(apresentar) {
  console.log(apresentar);
}
function meApresentar(callback) {
  console.log(" Olá, Eu gostaria de me apresentar");
  callback(
    "Me chamo Matheus Aurelio, tenho 26 anos e estou iniciando no mundo do desenvolvimento."
  );
}
meApresentar(apresentacao);*/
//----------------------------------------------------------------------

/**function aluno(alunoApresentar) {
  console.log(alunoApresentar);
}

function professor(callback) {
  console.log("Olá eu sou seu professor, e voce é meu aluno");
  callback("Olá professor, eu sou seu Aluno");
}

professor(aluno);*/
//----------------------------------------------------------------------
/**function pessoa(falar) {
  console.log(falar);
}

function saudacao(callback) {
  console.log("Olá, bom dia, me chamo matheus aurelio");
  callback("tenho 26 anos e sou estudante de JavaScript");
}
saudacao(pessoa);

 */

//----------------------------------------------------------------------
/** function variacao(exata) {
  console.log(exata);
}

function climaTempo(callback) {
  let cidade = "São Paulo";
  let relativo = "não é 100% exata!";
  console.log(
    `ClimaTempo fala sobre a previsão do tempo na cidade de ${cidade}`
  );
  callback(
    `A previsão do tempo em São Paulo pode sofrer variações (${relativo})`
  );
}

climaTempo(variacao); */
//----------------------------------------------------------------------
/** function mostrarMensagem(mensagem) {
  console.log(mensagem);
}

function saudarUsuario(nome, callback) {
  const nome1 = "Matheus Aurelio";
  const nome2 = "Ana Luiza";
  console.log(`Olá meu nome é ${nome1}! Bem vindo ao nosso site!`);
  callback(`Esperamos que voce aproveite a sua visita, ${nome2}`);
}

saudarUsuario("Saudar", mostrarMensagem);*/

//----------------------------------------------------------------------
/** function mostrarMensagem(mensagem) {
  console.log(mensagem);
}

function saudarUsuario(visitante, dono, callback) {
  console.log(`Olá, ${visitante}! Bem-vindo ao nosso site!`);
  callback(`Esperamos que você aproveite a sua visita, ${dono}!`);
}

saudarUsuario("Matheus Aurelio", "Maria Luiza", mostrarMensagem);

/** Olá, Matheus Aurelio! Bem-vindo ao nosso site!
script.js:71 Esperamos que você aproveite a sua visita, Maria Luiza!*/
//----------------------------------------------------------------------
/** function exibirResultado(parOuImpar) {
  if (parOuImpar % 2 === 0) {
    console.log(`O ${parOuImpar} é par`);
  } else {
    console.log(`O ${parOuImpar} é impar!`);
  }
}

function processarNumero(numero, callback) {
  if (numero > 10) {
    console.log(callback(numero));
  } else {
    console.log(`O ${numero} não é maio que 10, então não será processado`);
  }
}

processarNumero(20, exibirResultado); */

/**function resposta(responder) {
  console.log(responder);
}

function saudacao(nome, callback) {
  console.log(`Olá, bom dia a todos! gostaria de me apresentar(1)`);
  callback(`Me chamo ${nome} e sou estudante de JavaScript ES6+(2)`);
}

saudacao("Matheus", resposta); */
