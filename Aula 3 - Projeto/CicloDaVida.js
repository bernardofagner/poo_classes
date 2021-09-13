"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var CicloDaVida = /** @class */ (function () {
    function CicloDaVida() {
    }
    CicloDaVida.prototype.Genesis = function () {
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        this.CicloDaPessoa(grazielle);
    };
    CicloDaVida.prototype.CicloDaPessoa = function (pessoa) {
        var vivo = true;
        while (vivo) {
            if (this.ValidarFaseAdulta(pessoa.ObterIdade())) {
                this.FaseDeVidaAdulta(pessoa);
            }
            pessoa.Envelhecer(1);
            if (pessoa.ObterIdade() > 20) {
                vivo = false;
                console.log("A " + pessoa.ObterNome() + " encerrou o ciclo da vida.");
            }
        }
    };
    CicloDaVida.prototype.FaseDeVidaAdulta = function (pessoa) {
        var dinheiroEmprestadoMae = 0;
        for (var meses = 1; meses <= 2; meses++) {
            console.log(pessoa.ObterDinheiro());
            for (var dias = 1; dias <= 30; dias++) {
                // Pessoa trabalha:
                var salario = pessoa.Trabalhar();
                pessoa.DefinirDinheiro(salario);
                console.log("Recebi R$ " + salario + " no trabalho realizado.");
                // Verifica a possibilidade de pagamento do empréstimo
                if (dinheiroEmprestadoMae > 0 && pessoa.ObterDinheiro() >= dinheiroEmprestadoMae) {
                    console.log("Pagando o empr\u00E9stimo de: R$ " + dinheiroEmprestadoMae);
                    pessoa.DefinirDinheiro(-dinheiroEmprestadoMae);
                }
                // console.log(salario);
                // Pessoa faz compra: 
                if (dias % 5 === 0) {
                    var valorDaCompra = pessoa.FazerCompra();
                    if (pessoa.ObterDinheiro() > valorDaCompra) {
                        console.log("Antes da compra tenho: R$ " + pessoa.ObterDinheiro());
                        pessoa.DefinirDinheiro(-valorDaCompra);
                        console.log("Realizei uma compra de R$ " + valorDaCompra + ".");
                        console.log("Depois da compra tenho: R$ " + pessoa.ObterDinheiro());
                    }
                    else {
                        dinheiroEmprestadoMae += 200;
                        console.log("Pegando o empr\u00E9stimo de: R$ " + dinheiroEmprestadoMae);
                        pessoa.DefinirDinheiro(200);
                        pessoa.DefinirDinheiro(-valorDaCompra);
                        console.log("Realizei uma compra de R$ " + valorDaCompra + ".");
                    }
                }
            }
        }
    };
    CicloDaVida.prototype.ValidarFaseAdulta = function (idade) {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        return false;
    };
    return CicloDaVida;
}());
new CicloDaVida().Genesis();
