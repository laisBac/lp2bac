// Importando as funções dos módulos
import {somar} from './somar.mjs';
import {multiplicar} from './multiplicar.mjs';
import { subtrair } from './subtracao.mjs';
import { dividir } from './divisao.mjs';
import { exponenciar } from './potencia.mjs';

// utilizando as funções importadas
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicar = multiplicar(numero1, numero2); 
const resultadoSubtracao = subtrair(numero1, numero2);
const resultadoDivisao = dividir(numero1, numero2);
const resultadoPotencia = exponenciar(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicar}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);
console.log(`${numero1} ** ${numero2} = ${resultadoPotencia}`);
