"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var FaseDeCrescimento_1 = require("../enums/FaseDeCrescimento");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
        this.Dinheiro = 0;
    }
    Pessoa.Nascimento = function (nome, idade) {
        return new Pessoa(nome, idade);
    };
    Pessoa.prototype.ObterNome = function () {
        return this.Nome;
    };
    Pessoa.prototype.DefinirNome = function (nome) {
        this.Nome = nome;
    };
    Pessoa.prototype.ObterIdade = function () {
        return this.Idade;
    };
    Pessoa.prototype.DefinirIdade = function (idade) {
        this.Idade = idade;
    };
    Pessoa.prototype.DefinirDinheiro = function (dinheiro) {
        this.Dinheiro = this.Dinheiro + dinheiro;
    };
    Pessoa.prototype.ObterFaseDeCrescimento = function () {
        if (this.Idade >= 0 && this.Idade < 1) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Bebe;
        }
        if (this.Idade >= 1 && this.Idade < 10) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Crianca;
        }
        if (this.Idade >= 10 && this.Idade < 18) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adolescente;
        }
        if (this.Idade >= 18 && this.Idade < 50) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Adulto;
        }
        if (this.Idade >= 50 && this.Idade < 100) {
            return FaseDeCrescimento_1.FaseDeCrescimento.Idoso;
        }
        return FaseDeCrescimento_1.FaseDeCrescimento.Default;
    };
    Pessoa.prototype.Envelhecer = function (anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    };
    Pessoa.prototype.Trabalhar = function () {
        var minSalario = 1;
        var maxSalario = 100;
        return Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
    };
    Pessoa.prototype.Mercado = function () {
        var maxGastos = 100;
        var minGastos = 50;
        var gastosSupermercado = Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
        var countEmprestimos = 0;
        if (this.Dinheiro > gastosSupermercado) {
            this.Dinheiro = this.Dinheiro - gastosSupermercado;
            console.log(this.Nome + " foi ao mercado. O valor da compra foi de R$ " + gastosSupermercado + ",00.");
        }
        else {
            this.Emprestimo();
            countEmprestimos += 1;
            console.log(this.Nome + " foi ao mercado. Como a sua compra teve um valor de " + gastosSupermercado + " e ela possuia apenas\n                " + this.Dinheiro + ", solicitou a sua m\u00E3e um empr\u00E9stimo de $200. Agora ela tem um total de " + countEmprestimos + " empr\u00E9stimo(s) realizados.");
            this.Dinheiro = this.Dinheiro - gastosSupermercado;
        }
        return "O saldo atual, portanto, \u00E9 de R$ " + this.Dinheiro + ",00.";
    };
    Pessoa.prototype.Emprestimo = function () {
        var valorEmprestimo = 200;
        this.Dinheiro = this.Dinheiro + valorEmprestimo;
    };
    Pessoa.prototype.Caridade = function () {
        var saldoMinimoParaCaridade = 300;
        if (this.Dinheiro > saldoMinimoParaCaridade)
            this.Dinheiro = this.Dinheiro - 50;
        return "Voc\u00EA doou dinheiro \u00E0 caridade. Seu saldo atual \u00E9 de " + this.Dinheiro;
        // retornar o valor da caridade
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
