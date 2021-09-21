class ArrayClass {
    public constructor(){
        // Construtor padrão
    }

    public ExerciseOne(): void {
        const letras = ['a', 'b', 'c', 'd'];

        // Método para devolver o tamanho do array 
        console.log(this.ObterTamanhoDoArray(letras));

        // Método para obter um elemento de uma posição determinada do array
        console.log(this.CorromperArrayDeStrings(letras));
    }

    private ObterTamanhoDoArray(obj: Array<any>): number {
        let continua = true;
        let length = 0;

        while(continua) {
            if(obj[length] === undefined){
                continua = false;
            }
            else{
                length++; 
            }
        }
        return length;
    }

    private CorromperArrayDeStrings(obj: Array<any>): Array<any> {
        let indice = 0;
        let continua = true; 

        /*
        for(inicio; condição de parada; incremento){

        }
        */

        // for (; continua ; ){
        //     console.log(obj[indice]); 
        //     indice++

        //     if(indice >= 4){
        //         continua = false; 
        //     }
        // }

        for(let final = 2; final >= 0; final--){
            console.log(obj[final]);
        }
        return [];
    }
}

new ArrayClass().ExerciseOne();
