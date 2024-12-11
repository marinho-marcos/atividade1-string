function abreviaNome(nome) {
    
    let palavras = nome.split(" ");     //Divide o nome em palavras separadas por espaço
    
    //Se houver mais de uma palavra, retorna a abreviação usando string literals e acessando o primeiro elemento do array 'palavras' seguido da primeira letra do segundo elemento
    if (palavras.length > 1) {
        return `${palavras[0]} ${palavras[1][0]}.`;     
    }
    
    return nome;        // Se houver apenas uma palavra, retorna ela sem abreviação
}

let nome = "Marcos Marinho"

console.log(abreviaNome(nome));      
