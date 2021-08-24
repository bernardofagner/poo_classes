class Pessoa {
    Nome: string;
    Idade: number;

    private constructor(nome: string, idade: number) {
        this.Nome = nome;
        this.Idade = idade;
    }

    /*Design pattern: Método de fábrica (factory) */
    public static Nascimento(nome: string, idade: number): Pessoa {
        return new Pessoa(nome, idade);
    }

    /*Metodo possui 2 comportamentos padrão
    1 - Realizar uma opração e retornar o resultado;
    2 - Realizar uma operaçaõ sem retornar resultado; */

    /*Métodos possuem gategorias
    1 - Métodos de instância: Só podem ser usados, através de um objeto;
    2 - Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados*/
    public Fala(): string {

        /*Implementação para recem nascido*/
        if(this.Idade >= 0 && this.Idade < 1) {
            return 'bueee... buee.... bueee....';
        }
        

        /*Implementação para criança de 1 a 10 anos*/
    }

    public Envelhecer(anosDeVida: number): void {
        this.Idade = this.Idade + anosDeVida;
    }
}

const grazi = Pessoa.Nascimento('Grazi', 0);
console.log(grazi);
console.log(grazi.Fala())