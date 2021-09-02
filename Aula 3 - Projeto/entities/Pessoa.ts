export class Pessoa {
    private Nome: string;
    private Idade: number;
    private Dinheiro: number;

    private constructor(nome: string, idade: number) {
        this.Nome = nome;
        this.Idade = idade;
        this.Dinheiro = 0; 
    }

    /*Design pattern: Método de fábrica (factory) */
    public static Nascimento(nome: string, idade: number): Pessoa {
        return new Pessoa(nome, idade);
    }

    /*Metodo possui 2 comportamentos padrão
    1 - Realizar uma operação e retornar o resultado;
    2 - Realizar uma operação sem retornar resultado; */

    /*Métodos possuem gategorias
    1 - Métodos de instância: Só podem ser usados, através de um objeto;
    2 - Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados*/
    public Fases(): string {

        /*Implementação para recem nascido*/
        if(this.Idade >= 0 && this.Idade < 1) {
            return `Sou um bebê e tenho ${this.Idade} anos.`;
        }

        /*Implementação para criança de 1 a 10 anos*/
        if(this.Idade >= 1 && this.Idade < 10 ) {
            return `Agora sou uma criança e tenho ${this.Idade} anos.`; 
        }   

        if(this.Idade >= 10 && this.Idade < 18) {
            return `Sou um adolescente, estou estudando! Tenho ${this.Idade} anos.`;
        }

        if(this.Idade >= 18 && this.Idade < 25) {
            return `Já posso trabalhar, me tornei adulto! Tenho ${this.Idade} anos.`;
        }

        return 'Ainda não sei que fase da vida estou :(';
    }

    public Envelhecer(anosDeVida: number): void {
        this.Idade = this.Idade + anosDeVida;
    }

    /* Trabalhar: é um método na classe Pessoa que deve adicionar um valor
    aleatório entre 1$ e 50$ na propriedade Dinheiro da Pessoa, ou seja, sempre que
    chamar o método Trabalhar, ela irá receber um valor entre 1$ e 50$.
    */ 
    public Trabalhar(): string{
        // Math.random = Math.random() * (max - min) + min;
        const maxSalario = 50;
        const minSalario = 1; 
        let salarioRecebido = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario);
        if(this.Idade < 18) {
            return `Você ainda não pode trabalhar!`;
        }

        else {
            // console.log('Agora você pode trabalhar! ')
            this.Dinheiro = this.Dinheiro + salarioRecebido;
            console.log(`Você realizou um trabalho e recebeu pelo serviço RS ${salarioRecebido}`);
        }
        return `O dinheiro TOTAL que você possui agora em sua conta é R$ ${this.Dinheiro}`;
    }

    public Mercado(): string {
        let gastosSupermercado = Math.ceil(Math.random() * 100);

        if(this.Dinheiro < gastosSupermercado){
            console.log(`O valor da compra foi de R$ ${gastosSupermercado}. \n Infelizmente você não pode efetuar esta compra. Seu saldo é insuficiente.`);
        }

        else{
            this.Dinheiro = this.Dinheiro - gastosSupermercado;
         }
        
        return `O valor da sua compra no mercado foi de R$ ${gastosSupermercado}. O valor atual do seu saldo é de R$ ${this.Dinheiro}`;
    }
}

