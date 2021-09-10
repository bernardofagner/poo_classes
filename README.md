# poo_classes
A POO repository to practice the concepts around.

# Compilação arquivo typescript
<tsc ./nome_do_arquivo.ts>

# Execução arquivo typescript
<node ./nome_do_arquivo_principal.js>

# Conceitos
* Typescript é um superconjunto do JavaScript, ou seja, fornece um outro nível de abstração para o desenvolvimento de aplicações que, 
na sua essência, são baseadas em JavaScript. Não é possível executar (ainda) um algoritmo em TypeScript, portanto, é necessário compilar os arquivos
TypeScript e gerar o algoritmo correspondente em JavaScript. 

* JavaScript é uma linguagem interpretada e como por exemplo, C++ é uma linguagem compilada. 

# Pascal Case
Todas as palavras são iniciadas com a primeira letra maiúscula, seja para: variáveis, propriedades, nomes de métodos e afins. 
Exemplo para o uso dos estudos, práticas de projeto: método público.

# Camel Case
Todas as palavras são iniciadas com a primeira letra em maiúscula, exceto a primeira palavra, seja para: variáveis, propriedades, nomes de métodos e afins. Exemplo para o uso dos estudos, práticas de projeto: método privado.

# Tipos de Métodos
Metodo possui 2 comportamentos padrão:
    1. Realizar uma operação e retornar o resultado;
    2. Realizar uma operação sem retornar resultado; 

Métodos possuem categorias: 
    1. Métodos de instância: Só podem ser usados, através de um objeto;
    2. Métodos estáticos: Existem o escopo da classe, ou seja, não dependem de instâncias para serem usados
    
Método Get: Obtém alguma informação
Método Set: Define ou altera alguma informação

# Exercícios
## Exercício 01
1. Criar um método na classe Pessoa chamado trabalhar que deve adicionar um valor aleatório entre 1 e 50 na propriedade dinheiro da pessoa (sempre que chamar o método trabalhar, ela irá ganhar um valor de 1 a 50). A última instrução do método deve exibir uma mensagem  da quantia do valor recebido após o trabalho. A pessoa só pode trabalhar se a idade for igual ou maior que 18 anos. Se a pessoa tiver menos de 18 anos deve se exibir uma mensagem que ela (ainda) não pode  trabalhar. 

2. Criar um método na classe Pessoa chamado ir ao mercado e deve subtrair um valor aleatório entre 1 e 100 do dinheiro da pessoa. A pessoa não deve realizar a compra se o valor da compra a deixe com menos que 0 de saldo. A última instrução do método de ir ao mercado deve informar que a pessoa fez uma compra no valor x e ficou com y de dinheiro restante, onde x é o valor descontado e y o valor de dinheiro dela. 

3. Chamar o método envelhecer e adicionar 4 anos. 

4. Chamar o método trabalhar 

5. Chamar o método envelhecer

6. Chamar o método trabalhar 

7. Se agora a pessoa já for maior de idade, chamar o método ir ao mercado. 

## Exercício 02
1. Quando a pessoa tiver 18 anos ou mais ela precisa ter uma rotina mensal de trabalho e compras. Considerando que o mês tem 30 dias, a pessoa deve trabalhar todos os dias. -- OK! --

2. Ela deve ter dinheiro o suficiente para fazer compras pelo menos uma vez a cada 5 dias, incluindo finais de semana.

3. Se passarem 5 dias e a pessoa não tiver saldo para realizar a compra, ela deve receber $200 reais emprestado da mãe e fazer a compra. Sempre que ela pegar o dinheiro emprestado, ela deve devolver assim que tiver o saldo suficiente. 

4. Após passar os 30 dias, se a pessoa tiver mais de $300 de saldo, ela deve doar $50 para a caridade. 

2. Esta rotina deve se repetir por 12 meses. -- Dúvida: do while? --

3. O valor da compra de mercado deve ser agora, no mínimo, de $50 para que ela compre o necessário para 5 dias. -- OK! --

4. Sempre que a grazi pegar dinheiro emprestado, ela deve armazenar quantas vezes ela pegou dinheiro emprestado e sempre que ela pagar a mãe dela o dinheiro emprestado, ela deve remover 1 deste contador de dinheiro emprestado. 

