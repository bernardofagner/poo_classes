"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
    }
    /*Design pattern: Método de fábrica (factory) */
    Pessoa.Nascimento = function (nome, idade) {
        return new Pessoa(nome, idade);
    };
    /*Metodo possui 2 comportamentos padrão
    1 - Realizar uma operação e retornar o resultado;
    2 - Realizar uma operação sem retornar resultado; */
    /*Métodos possuem gategorias
    1 - Métodos de instância: Só podem ser usados, através de um objeto;
    2 - Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados*/
    Pessoa.prototype.Fala = function () {
        /*Implementação para recem nascido*/
        if (this.Idade >= 0 && this.Idade < 1) {
            return 'bueee... buee.... bueee....';
        }
        /*Implementação para criança de 1 a 10 anos*/
        if (this.Idade >= 1 && this.Idade < 10) {
            return 'O que é isso papai? O que é isso mamãe?';
        }
        return 'Não falarei nada';
    };
    Pessoa.prototype.Envelhecer = function (anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// //  Início do Ciclo da Vida 
// const grazi = Pessoa.Nascimento('Grazi', 0);
// console.log(grazi);
// console.log(grazi.Fala());
// let i; 
// for (i = 0; i < 9; i++){
//     grazi.Envelhecer(1);    
// }
// console.log(grazi);
// console.log(grazi.Fala());
