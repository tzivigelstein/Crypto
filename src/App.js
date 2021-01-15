import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'
import imagen from './assets/cryptomonedas.png'
import styled from '@emotion/styled'
import axios from 'axios'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &&::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }

  @media (max-width: 768px) {
    margin-top: 1.4rem;
  }
`

function App() {
  const [moneda, setMoneda] = useState('')
  const [criptoMoneda, setCriptoMoneda] = useState('')
  const [cotizacion, setCotizacion] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (moneda === '') return

    const fetchAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

      const resultado = await axios.get(url)

      //Spinner

      setLoading(true)

      //Ocultar Spinner

      setTimeout(() => {
        setLoading(false)
        setCotizacion(resultado.data.DISPLAY[criptoMoneda][moneda])
      }, 700)
    }

    fetchAPI()
  }, [moneda, criptoMoneda])

  //Mostrar Spinner o Cotizacion

  const componente = loading ? <Spinner /> : <Cotizacion cotizacion={cotizacion} />

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="crypto" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />
        {componente}
      </div>
    </Contenedor>
  )
}

export default App
