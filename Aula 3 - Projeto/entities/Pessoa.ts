import { FaseDeCrescimento } from "../enums/FaseDeCrescimento";
export class Pessoa {
    private Nome: string;
    private Idade: number;
    private Dinheiro: number;

    private constructor(nome: string, idade: number) {
        this.Nome = nome;
        this.Idade = idade;
        this.Dinheiro = 0; 
    }

    public static Nascimento(nome: string, idade: number): Pessoa {
        return new Pessoa(nome, idade);
    }

    public ObterNome(): string {
        return this.Nome;
    }

    public DefinirNome(nome: string): void {
        this.Nome = nome;
    }

    public ObterIdade(): number {
        return this.Idade;
    }

    public DefinirIdade(idade: number) : void {
        this.Idade = idade;
    }

    public ObterFaseDeCrescimento(): FaseDeCrescimento {
        if(this.Idade >= 0 && this.Idade < 1) {
            return FaseDeCrescimento.Bebe;
        }

        if(this.Idade >= 1 && this.Idade < 10 ) {
            return FaseDeCrescimento.Crianca; 
        }   

        if(this.Idade >= 10 && this.Idade < 18) {
            return FaseDeCrescimento.Adolescente;
        }

        if(this.Idade >= 18 && this.Idade < 50) {
            return FaseDeCrescimento.Adulto;
        }

        if(this.Idade >= 50 && this.Idade < 100){
            return FaseDeCrescimento.Idoso;
        }

        return FaseDeCrescimento.Default;
    }

    public Envelhecer(anosDeVida: number): void {
        this.Idade = this.Idade + anosDeVida;
    }

    public Trabalhar(): string{
        const minSalario = 1; 
        const maxSalario = 100; 
        let salarioRecebido = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario); 
        

        if (this.Idade < 18) {
            return `${this.Nome} ainda não pode trabalhar. Sua idade é de ${this.Idade} anos.`
        }

        if (this.Idade >= 18 && this.Idade < 60) {
            
            console.log(`${this.Nome} pode trabalhar. Sua idade é de ${this.Idade} anos.`);


            // do {
            //     do {
            //         let salarioRecebido = Math.ceil(Math.random() * (maxSalario - minSalario) + minSalario); 
            //         this.Dinheiro = this.Dinheiro + salarioRecebido;
            //         dia += 1;
            //         console.log(`${this.Nome} trabalhou pela ${dia}º vez e recebeu neste serviço R$${salarioRecebido},00.`);
            //     } while (dia <= 30);
            //     mes += 1;
            //     dia = 1;
            // } while (mes <= 12);

        return `${this.Nome} agora tem um saldo total de R$${this.Dinheiro},00.`;
        }

        if (this.Idade >=60 && this.Idade < 100){
            return `${this.Nome} se aposentou.`;
        }
    }

    public Mercado(): string {
        const maxGastos = 100; 
        const minGastos = 50;
        const passo = 5;
        let gastosSupermercado = Math.ceil(Math.random() * (maxGastos - minGastos) + minGastos);
        let countEmprestimos = 0;

        // A pessoa deve ter dinheiro o suficiente para fazer compras pelo menos uma vez a cada 5 dias,
        // incluindo finais de semana 
        for (let dia = 0; dia <= 30; dia+=passo){
            if(this.Dinheiro > gastosSupermercado){
                this.Dinheiro = this.Dinheiro - gastosSupermercado;
                console.log(`${this.Nome} foi ao mercado. O valor da compra foi de R$ ${gastosSupermercado},00.`);
            }

            else {
                this.Emprestimo();
                countEmprestimos += 1;

                console.log(`${this.Nome} foi ao mercado. Como a sua compra teve um valor de ${gastosSupermercado} e ela possuia apenas
                ${this.Dinheiro}, solicitou a sua mãe um empréstimo de $200. Agora ela tem um total de ${countEmprestimos} empréstimo(s) realizados.`);
                        
                this.Dinheiro = this.Dinheiro - gastosSupermercado;
            }

            return `O saldo atual, portanto, é de R$ ${this.Dinheiro},00.`;

        }
    }  

    public Emprestimo(): void {
        const valorEmprestimo = 200;
        this.Dinheiro = this.Dinheiro + valorEmprestimo;  
    }

    public Caridade(): string {
        const saldoMinimoParaCaridade = 300; 
        if(this.Dinheiro > saldoMinimoParaCaridade)
            this.Dinheiro = this.Dinheiro - 50;
            return `Você doou dinheiro à caridade. Seu saldo atual é de ${this.Dinheiro}`;
        }
    }


// Exemplo forEach
// function triploArrayOriginal(){
//     const entrada = [1,2,3,4];
//     const saida = entrada.map(numero => {
//         return numero*3;
//     })
//     console.log(saida);
// }

// triploArrayOriginal()


