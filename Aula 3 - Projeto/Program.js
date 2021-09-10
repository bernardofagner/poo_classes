"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.StartProgram = function () {
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        // console.log(`${grazielle.ObterNome()} acabou de nascer. Ela é um ${grazielle.ObterFaseDeCrescimento()}.`)
        grazielle.Envelhecer(9);
        console.log(grazielle.Trabalhar());
        grazielle.Envelhecer(9);
        console.log(grazielle.Trabalhar());
        console.log(grazielle.Mercado());
    };
    return Program;
}());
Program.StartProgram();
