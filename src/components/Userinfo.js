import React from 'react'
import { useState, useEffect } from 'react'

const Userinfo = ({ano, mes, dia}) => {
  const [useAno, setUserAno] = useState('')
  const [useMes, setUserMes] = useState('')
  const [useDia, setUseDia] = useState('')
  const [userAnos, setUserAnos] = useState('')
  const [userMeses, setUserMeses] = useState('')
  const [userDias, setUserDias] = useState('')


  


  return (


    <div className="mainpage">



      <form >
        
        
          <div className="day"  >
            <p>dia</p>
            <input type="text"  required placeholder='Seu dia de nascimento!' value={useDia} onChange={(e) => setUseDia(e.target.value)} />
          </div>
          <div className="month">
            <p>month</p>
            <input type="text" required placeholder='Seu mes de nascimento!' value={useMes} onChange={(e) => setUserMes(e.target.value)}/>
          </div>
          <div className="year">
            <p>year</p>
            <input input type="text" required placeholder='Seu ano de nascimento!' value={useAno} onChange={(e) => setUserAno(e.target.value)}/>
          </div>
          

      </form>


      <div className="horizontal-line"></div>
      <ul>
        <li><span>{userAnos}</span> Anos</li>
        <li><span>{userMeses}</span> Meses</li>
        <li><span>12</span>Dias</li>
      </ul>
      


    </div>
  )
}

export default Userinfo

/**
 *   useEffect(() => {
    setUserAnos( ano - useAno)
  },[useAno, ano, useMes])

  useEffect(() => {
    setUserMeses(mes - useMes)
  },[mes, useMes])

  useEffect(() => {
    setUserDias(dia - userDias)
  },[dia, userDias])
 * 
 * 
 * 
 * 
 *   const [dataInicial, setDataInicial ] = useState(``)
  const [dataAtual, setDataAtual ] = useState(``)

useEffect(() => {
  setDataInicial(`${useAno}-${useMes}-${useDia}`)
},[useDia, useAno, useMes])

useEffect(() => {
  setDataAtual(`${ano}-${mes}-${dia}`)
},[ano, mes, dia])



 *       <div className='inputrow'>
        <form>
         <p>{ano} {mes} {dia}</p>
         <label >
          <h6>Ano</h6>
          <input type="text" required placeholder='Seu ano de nascimento!' value={useAno} onChange={(e) => setUserAno(e.target.value)} />
          </label>
          <label >
          <h6>Dia</h6>
          <input type="text" required placeholder='Seu dia de nascimento!' value={useDia} onChange={(e) => setUseDia(e.target.value)} />
          </label>
          <label >
          <h6>Mes</h6>
          <input type="text" required placeholder='Seu mes de nascimento!' value={useMes} onChange={(e) => setUserMes(e.target.value)} />
          </label>
          <h2>{ano-useAno} {mes - useMes} {dia- useDia} </h2>
          <h1>{dataInicial}</h1>
          <h1>{dataAtual}</h1>
          <h2>{calcularDiferencaDias(dataInicial, dataAtual)}</h2>
          <p>{10626/365}</p>
        </form>
      </div>
 */