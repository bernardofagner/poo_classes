import { Pessoa } from "./entities/Pessoa";

class CicloDaVida { 
    public Genesis(): void { 
        const grazielle = Pessoa.Nascimento('Grazielle', 0) 
             
        this.CicloDaPessoa(grazielle);

        // grazielle.Envelhecer(9);                
        // console.log(grazielle.Trabalhar());

        // grazielle.Envelhecer(9);                
        // console.log(grazielle.Trabalhar());

        // console.log(grazielle.Mercado());
    }

    private CicloDaPessoa(pessoa: Pessoa): void {
        let vivo = true; 

        while (vivo) {

            for (let meses = 1; meses <= 12; meses++){

                for (let dias = 1; dias <= 30; dias++){
                    pessoa.Trabalhar();
                }
                console.log(meses);
            }
            pessoa.Envelhecer(1);
            if(pessoa.ObterIdade() > 100){
                vivo = false;
                console.log(`A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }
}

new CicloDaVida().Genesis(); 


