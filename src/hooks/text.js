const user = {ano: 1994, mes: 6, dia: 12 }

const atual = {ano: 2023, mes: 5, dia: 6}

const idade = (nascimento, hoje) => {

    let ano = hoje.ano - nascimento.ano
    let mes = 0
    const dia = 0

    if(nascimento.mes - hoje.mes < 0){
      console.log(true)
      mes = 12 + (hoje.mes - nascimento.mes)
      ano -= 1

    }else{
      mes = hoje.mes - nascimento.mes
    }
    console.log(nascimento.mes -hoje.mes)
    return {ano, mes, dia}
}

console.log(idade(user, atual).mes, idade(user, atual).ano)