let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

produtoA.nome = "camiseta"
produtoA.valor = 100.00
produtoA.internacional = "true"

produtoB.nome = "perfume"
produtoB.valor = 200.00
produtoB.internacional = "true"

produtoC.nome = "sandália"
produtoC.valor = 120.00
produtoC.internacional = "false"

console.log(produtoA.nome)
console.log(produtoA.valor)
console.log(produtoA.internacional)

console.log(produtoB.nome)
console.log(produtoB.valor)
console.log(produtoB.internacional)

console.log(produtoC.nome)
console.log(produtoC.valor)
console.log(produtoC.internacional)

if (produtoA.internacional == "true"){
    console.log(produtoA.nome, produtoA.valor * 1.2)
} else {
    console.log(produtoA.nome, produtoA.valor * 1.12)
}

if (produtoB.internacional == "true"){
    console.log(produtoB.nome, produtoB.valor * 1.2)
} else {
    console.log(produtoB.nome, produtoB.valor * 1.12)
}

if (produtoC.internacional == "true"){
    console.log(produtoC.nome, produtoC.valor * 1.2)
} else {
    console.log(produtoC.nome, produtoC.valor * 1.12)
}