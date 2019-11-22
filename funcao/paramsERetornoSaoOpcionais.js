// Calculando area do triángulo
function areaTriangulo(largura, altura) {
    const areaTriangulo = (largura * altura) / 2
    if (areaTriangulo > 20) {
        console.log(`Valor acima do permitido: ${areaTriangulo}m2`)
    } else {
        return areaTriangulo
    }
}

console.log(areaTriangulo(2, 2))
console.log(areaTriangulo(2))
console.log(areaTriangulo())
console.log(areaTriangulo(2, 3, 17, 22, 44))
console.log(areaTriangulo(10,5))