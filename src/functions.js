/**
 * Remove acentos
 * @param  {String} text [string que contem os acentos]
 * @return {String}      [string sem acentos]
 */
const accents = text => {
    var string = text
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,
        n: /\xF1/g
    };

    //Varrendo letra por letra do Array para realizar a substituição
    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra]
        string = string.replace(expressaoRegular, letra)
    }

    return string
}

/**
 * Remove acentos e caracteres especiais
 * @param  {String} string [string com acentos e caracteres especiais]
 * @return {String}        [string sem acentos e caracteres especiais]
 */
export default string => {

    //Retirando os acentos e deixa em letra minuscula
    string = accents(string.toLowerCase())

    //Removendo os caracteres especiais
    //string = string.replace(/[^a-z0-9]/gi, ' ')

    //Removendo abreviação de voce
    string = string.replace('vc', 'voce')

    //Removendo os caracteres especiais
    string = string.replace('?', '')

    //Removendo os caracteres especiais
    string = string.replace(',', '')

    //Removendo abreviação de voce
    string = string.replace('pq', 'porque')

    //Removendo os caracteres especiais
    string = string.replace('!', '')

    //Removendo os caracteres especiais
    string = string.replace('.', '')

    return string
}