import { Pessoa } from "./entities/Pessoa";

class CicloDaVida { 
    public Genesis(): void { 
        const grazielle = Pessoa.Nascimento('Grazielle', 0)              
        this.CicloDaPessoa(grazielle);
    }

    private CicloDaPessoa(pessoa: Pessoa): void {
        let vivo = true; 
        let autorizadoATrabalhar: boolean = false;
        
        while (vivo) {
            autorizadoATrabalhar = this.ValidarIdadeParaTrabalhar(pessoa.ObterIdade());
            for (let meses = 1; meses <= 2; meses++){

                for (let dias = 1; dias <= 30; dias++){
                    if (autorizadoATrabalhar){
                        let salario = pessoa.Trabalhar();
                        pessoa.DefinirDinheiro(salario);
                    }
                    
                }
            }
            pessoa.Envelhecer(1);
            if(pessoa.ObterIdade() > 20){
                vivo = false;
                console.log(`A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }

    private ValidarIdadeParaTrabalhar(idade: number): boolean {
        if (idade >= 18 && idade <= 60) {
            return true;
        }
        
        return false; 
    }
}

new CicloDaVida().Genesis(); 



