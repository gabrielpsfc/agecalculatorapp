import Icone from './Icone'
import { useState, } from 'react'
import useCalcIdade from '../hooks/useCalcIdade'

const Userinfo = ({ ano, mes, dia }) => {
  const [useAno, setUserAno] = useState(0)
  const [useMes, setUserMes] = useState(0)
  const [useDia, setUseDia] = useState(0)
  const [userAnos, setUserAnos] = useState('')
  const [userMeses, setUserMeses] = useState('')
  const [userDias, setUserDias] = useState('')


  const HandleSubmit = (e) => {
    e.preventDefault()
    console.log('ok')
    const { meses, anos, LastMeses, dias } = useCalcIdade({ ano, mes, dia }, { ano: useAno, mes: useMes-1, dia: useDia })
    console.log(meses)
    setUserAnos(anos);
    setUserMeses(LastMeses);
    setUserDias(dias);

  }
  return (


    <div className="mainpage">



      <form onSubmit={(e) => HandleSubmit(e)}>


        <div className="day"  >
          <p>DAY</p>
          <input type="number" required placeholder='Seu dia de nascimento!' value={useDia} onChange={(e) => setUseDia(e.target.value)} />
        </div>
        <div className="month">
          <p>MONTH</p>
          <input type="number" required placeholder='Seu mes de nascimento!' value={useMes} onChange={(e) => setUserMes(e.target.value)} />
        </div>
        <div className="year">
          <p>YEAR</p>
          <input input type="number" required placeholder='Seu ano de nascimento!' value={useAno} onChange={(e) => setUserAno(e.target.value)} />
        </div>

        <button type="submit"> <Icone/></button>
       


      </form>


      <div className="horizontal-line"></div>
      <ul>
        <li><span>{userAnos}</span> Anos</li>
        <li><span>{userMeses}</span> Meses</li>
        <li><span>{userDias}</span>Dias</li>
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