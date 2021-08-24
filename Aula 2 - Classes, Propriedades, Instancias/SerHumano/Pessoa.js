var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
    }
    /*Design pattern: Método de fábrica (factory) */
    Pessoa.Nascimento = function (nome, idade) {
        return new Pessoa(nome, idade);
    };
    /*Metodo possui 2 comportamentos padrão
    1 - Realizar uma opração e retornar o resultado;
    2 - Realizar uma operaçaõ sem retornar resultado; */
    /*Métodos possuem gategorias
    1 - Métodos de instância: Só podem ser usados, através de um objeto;
    2 - Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados*/
    Pessoa.prototype.Fala = function () {
        /*Implementação para recem nascido*/
        if (this.Idade >= 0 && this.Idade < 1) {
            return 'bueee... buee.... bueee....';
        }
        /*Implementação para criança de 1 a 10 anos*/
    };
    Pessoa.prototype.Envelhecer = function (anosDeVida) {
        this.Idade = this.Idade + anosDeVida;
    };
    return Pessoa;
}());
var grazi = Pessoa.Nascimento('Grazi', 0);
console.log(grazi);
console.log(grazi.Fala());
