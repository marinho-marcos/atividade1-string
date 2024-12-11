function cortaString(string, tamanho){
    return string.slice(0, tamanho);        //RETORNA PEDAÇO DA STRING QUE INICIA DO ZERO E VAI ATÉ ELEMENTO INFORMADO
}

let conteudo = "Paraíba";

console.log(cortaString(conteudo, 5));      //EXIBE O RETORNO DA FUNCÃO 'CORTASTRING' QUE VAI EXIBIR A STRING PARTINDO DO PRIMEIRO CARACTERE ATÉ O QUINTO