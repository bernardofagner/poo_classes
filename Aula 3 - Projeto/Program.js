"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var Program = /** @class */ (function () {
    function Program() {
    }
    // Método estático da classe, utilizado para iniciar o programa
    Program.StartProgram = function () {
        console.log('Programa Iniciado.');
        // Iniciando o objeto 
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        console.log(grazielle);
        // Chamando o método fala
        console.log(grazielle.Fala());
        // Chamando o método de Envelhecer
        for (var i = 0; i < 9; i++) {
            grazielle.Envelhecer(1);
        }
        console.log(grazielle.Fala());
        console.log('Programa Finalizado.');
    };
    return Program;
}());
Program.StartProgram();
