
import { useState } from 'react'

const useDate = () => {
  const DataAtual = new Date()
  const [ano] = useState(DataAtual.getFullYear())
  const [mes] = useState(DataAtual.getMonth() )
  const [dia] = useState(DataAtual.getDate())


  return {ano, mes, dia}
}

export default useDate