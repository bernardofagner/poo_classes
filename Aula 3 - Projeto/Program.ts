import { Pessoa } from "./entities/Pessoa";

class Program {
    // Método estático da classe, utilizado para iniciar o programa
    public static StartProgram(): void {    
        console.log('Programa Iniciado.');

        // Iniciando o objeto 
        const grazielle = Pessoa.Nascimento('Grazielle', 0);
        console.log(grazielle);

        // Chamando o método fala
        console.log(grazielle.Fala());

        // Chamando o método de Envelhecer
        for (let i = 0; i < 9; i++){
            grazielle.Envelhecer(1);    
        }
        console.log(grazielle.Fala());

        console.log('Programa Finalizado.');
    }
}

Program.StartProgram(); 


