import React from 'react'
import { useState, useEffect } from 'react'

const Userinfo = ({ano, mes, dia}) => {
  const [useAno, setUserAno] = useState('')
  const [useMes, setUserMes] = useState('')
  const [useDia, setUseDia] = useState('')
  const [dataInicial, setDataInicial ] = useState(``)
  const [dataAtual, setDataAtual ] = useState(``)

useEffect(() => {
  setDataInicial(`${useAno}-${useMes}-${useDia}`)
},[useDia, useAno, useMes])

useEffect(() => {
  setDataAtual(`${ano}-${mes}-${dia}`)
},[ano, mes, dia])


function calcularDiferencaDias(dataInicial, dataFinal) {
  // Converter as datas para objetos Date
  var dataInicio = new Date(dataInicial);
  var dataFim = new Date(dataFinal);

  // Calcular a diferença em milissegundos
  var diferencaMilissegundos = Math.abs(dataFim - dataInicio);

  // Converter a diferença em dias
  var diferencaDias = Math.ceil(diferencaMilissegundos / (1000 * 60 * 60 * 24));

  return diferencaDias;
}

  return (
    <form>
     <p>{ano} {mes} {dia}</p>
     <label >
      <input type="text" required placeholder='Seu ano de nascimento!' value={useAno} onChange={(e) => setUserAno(e.target.value)} />
      </label>
      <label >
      <input type="text" required placeholder='Seu dia de nascimento!' value={useDia} onChange={(e) => setUseDia(e.target.value)} />
      </label>
      <label >
      <input type="text" required placeholder='Seu mes de nascimento!' value={useMes} onChange={(e) => setUserMes(e.target.value)} />
      </label>
      <h2>{ano-useAno} {mes - useMes} {dia- useDia} </h2>
      <h1>{dataInicial}</h1>
      <h1>{dataAtual}</h1>
      <h2>{calcularDiferencaDias(dataInicial, dataAtual)}</h2>
      <p>{10626/365}</p>
    </form>
  )
}

export default Userinfo