/* Maria escreverá uma lista com todos os inteiros positivos entre A e B, inclusive, 
 * na base decimal e sem zeros à esquerda. Ela quer saber quantas vezes cada um dos 
 * dígitos irá ser usado.
 * Escreva uma função que receba dois parâmetros, o valor inicial (start) e o 
 * final (end) e retorne um array de 10 posições informando a quantidade 
 * de vezes que cada dígito irá aparecer.
 * 
 * Cada índice de posição do array corresponde ao seu respectivo dígito.
 * Exemplo: Ao ser informado os parâmetros start = 5 e end = 10 a função deve retornar
 * [1, 1, 0, 0, 0, 1, 1, 1, 1, 1]
 * 
 * DADOS DO CANDIDATO
 * NOME: DIVA SILVA PRATES
 * EMAIL: divasilvaprates@gmail.com
*/

const digit_count = (start, end) => {
  let digitos = []; //vetor que armazena os dígitos
  let j = 0; //variável para percorrer digitos[]
  for (var i = start; i <= end; i++){ //numeros entre start e end
    var d = i.toString().split(''); //dividir cada número em dígitos
    for(var a=0; a<d.length; a++){ //for auxiliar, caso o numero possua mais de um dígito
      digitos[j] = d[a]; //guardar cada digíto en digitos[]
      j++; //ir para a próxima posição de digitos[]
    }
  }
  let cont = [0,0,0,0,0,0,0,0,0,0] //inicializar vetor que representa os digitos de 0 - 9
  for(var i=0; i<digitos.length; i++){ //percorrer digitos[]
     cont[digitos[i]] += 1; //lógica para contar os dígitos e armazenar o resultado em cont[]
  }
}

module.exports = digit_count;
