
const useCalcIdade = (atual, user) => {
  let meses = ((atual.ano - user.ano)*12) +(atual.mes - user.mes)
  console.log(meses)
  if(atual.dia < user.dia) {meses -= 1}
  console.log(meses)
  const anos = Math.floor(meses/12)
  let LastMeses = meses%12
  let dias = 0

  
  if (atual.dia - user.dia < 0) {
    if (atual.mes - 1 === 0 || atual.mes - 1 === 2 || atual.mes - 1 === 4 || atual.mes - 1 === 6 || atual.mes - 1 === 7 || atual.mes - 1 === 9 || atual.mes - 1 === 10) { // mes anterior termina no dia 31
      console.log('s anterior termina no dia 31')
      dias = atual.dia + 31 - user.dia;
    }else if (atual.mes - 1 === 1){ // mes anterior é fevereiro
      console.log('mes anterior é fevereiro')
      if(atual.ano%4 !==0){ //ano não é bissexto
        console.log('ano não é bissexto')
        dias = atual.dia +28 - user.dia
      }else {// ano é bissexto
        console.log('ano é bissexto')
        dias = atual.dia +29 - user.dia
      }
    }else {
      dias = atual.dia + 30 - user.dia; // mes anterior termina com 30 dias
    }
 
  } else {
    dias = atual.dia - user.dia;
  }


  return {meses, anos, LastMeses, dias}
}

export default useCalcIdade






