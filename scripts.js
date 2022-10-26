let listaEstudantes = [
  {
    nome: `Marcos`,
    notaUm: 5,
    notaDois: 5,
  },
  {
    nome: `Bruna`,
    notaUm: 10,
    notaDois: 8,
  },
  {
    nome: `Vivian`,
    notaUm: 2,
    notaDois: 10,
  },
]

function media(notaUm, notaDois) {
return (notaUm + notaDois) / 2
}

function printMedia(estudante) {
  if (media(estudante.notaUm, estudante.notaDois) >= 7){
    return `
    Estudante ${estudante.nome} tem média de ${media(estudante.notaUm, estudante.notaDois)}
    Parabéns ${estudante.nome} você foi aprovado!`
  } else {
    return `
    Estudante ${estudante.nome} tem média de ${media(estudante.notaUm, estudante.notaDois)}
    Não foi dessa vez ${estudante.nome}, estude mais`
  }
}

for(let estudante of listaEstudantes) {
  alert (printMedia(estudante))
}

