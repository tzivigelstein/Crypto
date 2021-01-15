import React, { useState, useEffect } from 'react'
import useMoneda from '../Hooks/useMoneda'
import useCripto from '../Hooks/useCripto'
import Error from './Error'
import axios from 'axios'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &&:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`

const Formulario = ({ setMoneda, setCriptoMoneda }) => {
  //State del listado de cripto

  const [lista, setLista] = useState([])
  const [error, setError] = useState(false)

  //Arreglo de monedas

  const MONEDAS = [
    {
      codigo: 'USD',
      nombre: 'Dolar USA',
    },
    {
      codigo: 'ARS',
      nombre: 'Peso Argentino',
    },
    {
      codigo: 'EUR',
      nombre: 'Euro',
    },
    {
      codigo: 'GDP',
      nombre: 'Libra Esterlina',
    },
  ]

  //Utilizar useMoneda

  const [moneda, SelectMoneda] = useMoneda('Elige tu moneda', MONEDAS)

  //Utilizar useCripto

  const [cripto, SelectCripto] = useCripto('Elige tu criptomoneda', lista)

  //API Call

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

      const resultado = await axios.get(url)

      setLista(resultado.data.Data)
    }
    fetchAPI()
  }, [])

  //Cotizacion

  const cotizarMoneda = e => {
    e.preventDefault()

    //Validar campos

    if (moneda === '' || cripto === '') {
      setError(true)
      return
    }

    setError(false)
    setMoneda(moneda)
    setCriptoMoneda(cripto)
  }

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Inidique las monedas a cotizar" /> : null}
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Cotizar" />
    </form>
  )
}

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptoMoneda: PropTypes.func.isRequired,
}
export default Formulario
