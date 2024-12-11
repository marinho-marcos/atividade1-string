function verificarString(string){
    return typeof(string) === "string";     //RETORNA VALOR BOOLEANO RESULTANTE DO TESTE DE TIPO DA STRING
}

let conteudo = "Hello world!";
let conteudo2 = 555;

console.log(verificarString(conteudo));        //EXIBINDO RETORNO DA FUNCAO QUE VERIFICA TIPO DA STRING
console.log(verificarString(conteudo2));       
