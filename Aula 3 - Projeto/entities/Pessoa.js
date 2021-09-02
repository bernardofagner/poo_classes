"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
        this.Dinheiro = 0;
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
    Pessoa.prototype.Fases = function () {
        /*Implementação para recem nascido*/
        if (this.Idade >= 0 && this.Idade < 1) {
            return "Sou um beb\u00EA e tenho " + this.Idade + " anos.";
        }
        /*Implementação para criança de 1 a 10 anos*/
        if (this.Idade >= 1 && this.Idade < 10) {
            return "Agora sou uma crian\u00E7a e tenho " + this.Idade + " anos.";
        }
        if (this.Idade >= 10 && this.Idade < 18) {
            return "Sou um adolescente, estou estudando! Tenho " + this.Idade + " anos.";
        }
        if (this.Idade >= 18 && this.Idade < 25) {
            return "J\u00E1 posso trabalhar, me tornei adulto! Tenho " + this.Idade + " anos.";
        }
        return 'Ainda não sei que fase da vida estou :(';
    };
    Pessoa.prototype.Envelhecer = function (anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    };
    /* Trabalhar: é um método na classe Pessoa que deve adicionar um valor
    aleatório entre 1$ e 50$ na propriedade Dinheiro da Pessoa, ou seja, sempre que
    chamar o método Trabalhar, ela irá receber um valor entre 1$ e 50$.
    */
    Pessoa.prototype.Trabalhar = function () {
        // Math.random = Math.random() * (max - min) + min;
        var maxSalario = 50;
        var minSalario = 1;
        var salarioRecebido = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
        if (this.Idade < 18) {
            return "Voc\u00EA ainda n\u00E3o pode trabalhar!";
        }
        else {
            // console.log('Agora você pode trabalhar! ')
            this.Dinheiro = this.Dinheiro + salarioRecebido;
            console.log("Voc\u00EA realizou um trabalho e recebeu pelo servi\u00E7o RS " + salarioRecebido);
        }
        return "O dinheiro TOTAL que voc\u00EA possui agora em sua conta \u00E9 R$ " + this.Dinheiro;
    };
    Pessoa.prototype.Mercado = function () {
        var gastosSupermercado = Math.ceil(Math.random() * 100);
        if (this.Dinheiro < gastosSupermercado) {
            console.log("O valor da compra foi de R$ " + gastosSupermercado + ". \n Infelizmente voc\u00EA n\u00E3o pode efetuar esta compra. Seu saldo \u00E9 insuficiente.");
        }
        else {
            this.Dinheiro = this.Dinheiro - gastosSupermercado;
        }
        return "O valor da sua compra no mercado foi de R$ " + gastosSupermercado + ". O valor atual do seu saldo \u00E9 de R$ " + this.Dinheiro;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
