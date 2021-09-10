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
        var dia = 1;
        var mes = 1;
        var totalDiasNoMes = 30;
        var totalMesesNoAno = 12;
        var minSalario = 1;
        var maxSalario = 100;
        if (this.Idade < 18) {
            return this.Nome + " ainda n\u00E3o pode trabalhar. Sua idade \u00E9 de " + this.Idade + " anos.";
        }
        if (this.Idade >= 18 && this.Idade < 60) {
            console.log(this.Nome + " pode trabalhar. Sua idade \u00E9 de " + this.Idade + " anos.");
            // A pessoa deve trabalhar todos os dias
            do {
                do {
                    var salarioRecebido = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
                    this.Dinheiro = this.Dinheiro + salarioRecebido;
                    dia += 1;
                    console.log(this.Nome + " trabalhou pela " + dia + "\u00BA vez e recebeu neste servi\u00E7o R$" + salarioRecebido + ",00.");
                } while (dia <= 30);
                mes += 1;
                dia = 1;
            } while (mes <= 12);
            return this.Nome + " agora tem um saldo total de R$" + this.Dinheiro + ",00.";
        }
        if (this.Idade >= 60 && this.Idade < 100) {
            return this.Nome + " se aposentou.";
        }
    };
    Pessoa.prototype.Mercado = function () {
        var maxGastos = 100;
        var minGastos = 50;
        var passo = 5;
        var gastosSupermercado = Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
        var countEmprestimos = 0;
        // A pessoa deve ter dinheiro o suficiente para fazer compras pelo menos uma vez a cada 5 dias,
        // incluindo finais de semana 
        for (var dia = 0; dia <= 30; dia += passo) {
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
        }
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
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
// Exemplo forEach
// function triploArrayOriginal(){
//     const entrada = [1,2,3,4];
//     const saida = entrada.map(numero => {
//         return numero*3;
//     })
//     console.log(saida);
// }
// triploArrayOriginal()
