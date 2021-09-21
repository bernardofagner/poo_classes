var ArrayClass = /** @class */ (function () {
    function ArrayClass() {
        // Construtor padrão
    }
    ArrayClass.prototype.ExerciseOne = function () {
        var letras = ['a', 'b', 'c', 'd'];
        // Método para devolver o tamanho do array 
        console.log(this.ObterTamanhoDoArray(letras));
        // Método para obter um elemento de uma posição determinada do array
        console.log(this.CorromperArrayDeStrings(letras));
    };
    ArrayClass.prototype.ObterTamanhoDoArray = function (obj) {
        var continua = true;
        var length = 0;
        while (continua) {
            if (obj[length] === undefined) {
                continua = false;
            }
            else {
                length++;
            }
        }
        return length;
    };
    ArrayClass.prototype.CorromperArrayDeStrings = function (obj) {
        var indice = 0;
        var continua = true;
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
        for (var final = 2; final >= 0; final--) {
            console.log(obj[final]);
        }
        return [];
    };
    return ArrayClass;
}());
new ArrayClass().ExerciseOne();
