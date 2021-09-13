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
        var autorizadoATrabalhar = false;
        while (vivo) {
            autorizadoATrabalhar = this.ValidarIdadeParaTrabalhar(pessoa.ObterIdade());
            for (var meses = 1; meses <= 2; meses++) {
                for (var dias = 1; dias <= 30; dias++) {
                    if (autorizadoATrabalhar) {
                        var salario = pessoa.Trabalhar();
                        console.log(pessoa.DefinirDinheiro(salario));
                    }
                }
            }
            pessoa.Envelhecer(1);
            if (pessoa.ObterIdade() > 20) {
                vivo = false;
                console.log("A " + pessoa.ObterNome() + " encerrou o ciclo da vida.");
            }
        }
    };
    CicloDaVida.prototype.ValidarIdadeParaTrabalhar = function (idade) {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        return false;
    };
    return CicloDaVida;
}());
new CicloDaVida().Genesis();
