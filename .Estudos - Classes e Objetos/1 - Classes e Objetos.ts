/*  ----- Conceitos da Programação Orientada a Objetos ------
    Pilares: 
        1. Abstração: 
        2. Encapsulamento 
        3. Herança
        4. Polimorfismo 
*/ 

/* 1. Abstração: Permite isolar de um objeto somente os conceitos que são necessários
para o funcionamento do programa. Ex: precisamos apenas do nome e sobrenome de uma pessoa */

export class Pessoa{
    private Nome: string;
    private Sobrenome: string; 

    constructor(nome: string, sobrenome: string){
        this.Nome = nome; 
        this.Sobrenome = sobrenome;
    }
}

/* 2. Encapsulamento: visa ocultar partes internas de um objeto e exibir apenas o necessário
para o uso externo. Exemplo: um controle remoto. Não preciso saber do que tem dentro dele 
só preciso saber onde estão as teclas que irão fazer funcionar */

export class RemoteControl {
    constructor (private powerStatus = false) {

    }

    public turnOn(): void {
        this.powerStatus = true; 
    }

    public turnOff(): void {
        this.powerStatus = false; 
    }

    public getStatus(): boolean {
        return this.powerStatus;
    }
}