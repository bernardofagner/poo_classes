import { Pessoa } from "./entities/Pessoa";

class CicloDaVida { 
    public Genesis(): void { 
        const grazielle = Pessoa.Nascimento('Grazielle', 0)              
        this.CicloDaPessoa(grazielle);
    }

    private CicloDaPessoa(pessoa: Pessoa): void {
        let vivo = true;         
        
        while (vivo) { 
            if (this.ValidarFaseAdulta(pessoa.ObterIdade())){
                this.FaseDeVidaAdulta(pessoa); 
            }          
            
            pessoa.Envelhecer(1);

            if(pessoa.ObterIdade() > 20){
                vivo = false;
                console.log(`A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }

    private FaseDeVidaAdulta(pessoa: Pessoa): void {
        let dinheiroEmprestadoMae = 0; 

        for (let meses = 1; meses <= 2; meses++){
            console.log(pessoa.ObterDinheiro());

            for (let dias = 1; dias <= 30; dias++){ 
                // Pessoa trabalha:
                let salario = pessoa.Trabalhar();
                pessoa.DefinirDinheiro(salario);
                console.log(`Recebi R$ ${salario} no trabalho realizado.`);

                // Verifica a possibilidade de pagamento do empréstimo
                if (dinheiroEmprestadoMae > 0 && pessoa.ObterDinheiro() >= dinheiroEmprestadoMae){
                    console.log(`Pagando o empréstimo de: R$ ${dinheiroEmprestadoMae}`);
                    pessoa.DefinirDinheiro(-dinheiroEmprestadoMae);
                }
                // console.log(salario);

                // Pessoa faz compra: 
                if(dias%5 === 0){
                    const valorDaCompra = pessoa.FazerCompra();

                    if(pessoa.ObterDinheiro() > valorDaCompra) {
                        console.log(`Antes da compra tenho: R$ ${pessoa.ObterDinheiro()}`);
                        pessoa.DefinirDinheiro(-valorDaCompra);
                        console.log(`Realizei uma compra de R$ ${valorDaCompra}.`);
                        console.log(`Depois da compra tenho: R$ ${pessoa.ObterDinheiro()}`);
                    }
                    else {                        
                        dinheiroEmprestadoMae += 200;
                        console.log(`Pegando o empréstimo de: R$200`);

                        pessoa.DefinirDinheiro(200);
                        pessoa.DefinirDinheiro(-valorDaCompra);  
                        console.log(`Realizei uma compra de R$ ${valorDaCompra}.`);                      
                    }

                }
            }
        } 
    }

    private ValidarFaseAdulta(idade: number): boolean {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        
        return false; 
    }
}

new CicloDaVida().Genesis(); 



