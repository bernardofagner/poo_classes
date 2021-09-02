"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./entities/Pessoa");
var Program = /** @class */ (function () {
    function Program() {
    }
    // Método estático da classe, utilizado para iniciar o programa
    Program.StartProgram = function () {
        // --------- Início do Programa ---------  
        console.log('Programa Iniciado.');
        // Início do objeto: Nascimento da Pessoa declarando seu nome e sua idade inicial
        var grazielle = Pessoa_1.Pessoa.Nascimento('Grazielle', 0);
        console.log(grazielle);
        // Chamando o método Fases pela primeira vez
        console.log(grazielle.Fases());
        // Chamando o método de Envelhecer
        for (var i = 0; i < 10; i++) {
            grazielle.Envelhecer(1);
        }
        console.log("Estou crescendo!");
        console.log(grazielle.Fases());
        // Envelhecendo 4 anos: 
        grazielle.Envelhecer(4);
        console.log(grazielle.Trabalhar());
        grazielle.Envelhecer(4);
        console.log(grazielle.Trabalhar());
        console.log(grazielle.Mercado());
        // // --------- Fim do Programa --------- 
        // console.log('Programa Finalizado.');
    };
    return Program;
}());
Program.StartProgram();
/*
    1. Criar um método na classe Pessoa chamado trabalhar que deve adicionar um valor aleatório
        entre 1 e 50 na propriedade dinheiro da pessoa (sempre que chamar o método trabalhar,
        ela irá ganhar um valor de 1 a 50). A última instrução do método deve exibir uma mensagem
        da quantia do valor recebido após o trabalho. A pessoa só pode trabalhar se a idade for igual
        ou maior que 18 anos. Se a pessoa tiver menos de 18 anos deve se exibir uma mensagem que ela
        (ainda) não pode trabalhar. --- OK! ---

    2. Criar um método na classe Pessoa chamado ir ao mercado e deve subtrair um valor aleatório
        entre 1 e 100 do dinheiro da pessoa. A pessoa não deve realizar a compra se o valor da
        compra a deixe com menos que 0 de saldo. A última instrução do método de ir ao mercado deve
        informar que a pessoa fez uma compra no valor x e ficou com y de dinheiro restante, onde x é o
        valor descontado e y o valor de dinheiro dela.

    3. Chamar o método envelhecer e adicionar 4 anos.

    4. Chamar o método trabalhar

    5. Chamar o método envelhecer

    6. Chamar o método trabalhar

    7. Se agora a pessoa já for maior de idade, chamar o método ir ao mercado.


*/ 
