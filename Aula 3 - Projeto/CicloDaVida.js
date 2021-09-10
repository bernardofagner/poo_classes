"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var CicloDaVida = /** @class */ (function () {
    function CicloDaVida() {
    }
    CicloDaVida.prototype.Genesis = function () {
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        this.CicloDaPessoa(grazielle);
        // grazielle.Envelhecer(9);                
        // console.log(grazielle.Trabalhar());
        // grazielle.Envelhecer(9);                
        // console.log(grazielle.Trabalhar());
        // console.log(grazielle.Mercado());
    };
    CicloDaVida.prototype.CicloDaPessoa = function (pessoa) {
        var vivo = true;
        while (vivo) {
            for (var meses = 1; meses <= 12; meses++) {
                for (var dias = 1; dias <= 30; dias++) {
                }
                console.log(meses);
            }
            pessoa.Envelhecer(1);
            if (pessoa.ObterIdade() > 100) {
                vivo = false;
                console.log("A " + pessoa.ObterNome() + " encerrou o ciclo da vida.");
            }
        }
    };
    return CicloDaVida;
}());
new CicloDaVida().Genesis();
