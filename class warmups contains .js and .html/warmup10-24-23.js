const longword = (names) =>{
    let arryofnmae = names.split(` `)
    let thelongname = ''
    for(let name of arryofnmae){
        if(name.length > thelongname.length)
            thelongname = name
        return arryofnmae
    }

}
console.log(longword("the qucik brown fox jumped over the lazy dog"))