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

            if(pessoa.ObterIdade() > 18){
                vivo = false;
                console.log(`A ${pessoa.ObterNome()} encerrou o ciclo da vida.`);
            }
        }
    }

    private FaseDeVidaAdulta(pessoa: Pessoa): void {
        let dinheiroTotalEmprestadoPelaMae = 0; 
        let countQuantidadeEmprestimos = 0; 

        for (let meses = 1; meses <= 1; meses++){
            console.log(pessoa.ObterSaldoCarteira());

            for (let dias = 1; dias <= 10; dias++){ 
                let salario = pessoa.Trabalhar();
                const valorDoEmprestimo = 200; 
                pessoa.DefinirSaldoCarteira(salario);
                console.log(`[Idade: ${pessoa.ObterIdade()} anos] [Mês: ${meses}] [Dia: ${dias}] [Salário recebido: R$${salario}].`);

                // Verifica a possibilidade de pagamento do empréstimo
                if (dinheiroTotalEmprestadoPelaMae > 0 && pessoa.ObterSaldoCarteira() >= dinheiroTotalEmprestadoPelaMae){
                    console.log(`O saldo atual é de R$${pessoa.ObterSaldoCarteira()}.`);
                    
                    pessoa.DefinirSaldoCarteira(-dinheiroTotalEmprestadoPelaMae);

                    console.log('');
                    console.log(`É possível pagar um empréstimo de R$${valorDoEmprestimo}. O saldo pós pagamento é de R$${pessoa.ObterSaldoCarteira()}`);
                    countQuantidadeEmprestimos -= 1; 
                    
                    if(countQuantidadeEmprestimos === 0){
                        console.log('Não há mais empréstimos a serem pagos!');
                    }
                    else{
                        console.log(`Ainda há ${countQuantidadeEmprestimos} a serem pagos, ou seja, R${dinheiroTotalEmprestadoPelaMae}.`);
                    }

                    console.log('');
                }
                // console.log(salario);

                // Pessoa faz compra: 
                if(dias%5 === 0){
                    const valorDaCompra = pessoa.CalculaValorDaCompra(); 
                    let salarioAntesDaCompra = pessoa.ObterSaldoCarteira(); 
                    console.log(`Salário acumulado na carteira: R$${salarioAntesDaCompra}`);

                    console.log('');
                    console.log(' --------------------- IDA AO MERCADO ---------------------');

                    if(salarioAntesDaCompra >= valorDaCompra) {
                        pessoa.DefinirSaldoCarteira(-valorDaCompra);
                        console.log(`O valor calculado para a realização desta compra é de R$${valorDaCompra}.`);
                        console.log(`Compra efetivada com sucesso. Saldo pós compra: [R$${salarioAntesDaCompra} - ${valorDaCompra} = R$ ${pessoa.ObterSaldoCarteira()}]`);
                    }
                    else {                        
                        console.log(`Saldo insuficiente. O cálculo do valor da compra desejada é de R$${valorDaCompra}.`);
                        dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
                        countQuantidadeEmprestimos += 1; 
                        let saldoAposEmprestimo = pessoa.DefinirSaldoCarteira(valorDoEmprestimo);

                        console.log(`Portanto, um empréstimo de R$${valorDoEmprestimo} é realizado, totalizando um total de ${countQuantidadeEmprestimos} empréstimo(s) feitos.`);
                        console.log(`Saldo atualizado pós empréstimo: [R$${pessoa.ObterSaldoCarteira()}]`); 
                        
                        if(pessoa.ObterSaldoCarteira() >= valorDaCompra){
                            pessoa.DefinirSaldoCarteira(-valorDaCompra); 
                            console.log(`Desta forma, foi possível realizar a compra. O saldo atual é de: [R$${pessoa.ObterSaldoCarteira()}] `);
                        }
                        else{
                            pessoa.DefinirSaldoCarteira(valorDoEmprestimo);

                            dinheiroTotalEmprestadoPelaMae += valorDoEmprestimo;
                            countQuantidadeEmprestimos += 1; 

                            console.log(`Ainda não foi possível realizar a compra. Outro empréstimo foi efetuado.`);
                            console.log(`Há um total de ${countQuantidadeEmprestimos} empréstimos adquiridos, ou seja, R$${dinheiroTotalEmprestadoPelaMae} em dívida.`); 

                        }
                    }
                    console.log('------------------------------------------------------------');
                    console.log('');
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



