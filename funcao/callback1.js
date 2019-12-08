const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Nissan', 'Renault', 'Peugeot', 'Ford']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)


// Com função arrow
const f = ['Fiat', 'Chevrolet', 'Jeep']

let imp = (nom, ind) => console.log(`${ind + 1}. ${nom}`)
f.forEach(imp)