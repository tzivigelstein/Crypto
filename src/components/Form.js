import React, { useState, useEffect } from 'react'
import useExchange from '../hooks/useExchange'
import useCrypto from '../hooks/useCrypto'
import Error from './Error'
import enviroment from '../utils/enviroment'
import styled from '@emotion/styled'

const Button = styled.input`
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

const Form = ({ setExchange, setCrypto }) => {
  const [list, setList] = useState([])
  const [error, setError] = useState(false)

  const EXCHANGES = [
    {
      id: 0,
      codigo: 'USD',
      nombre: 'Dólar USA'
    },
    {
      id: 1,
      codigo: 'ARS',
      nombre: 'Peso Argentino'
    },
    {
      id: 2,
      codigo: 'EUR',
      nombre: 'Euro'
    },
    {
      id: 3,
      codigo: 'GBP',
      nombre: 'Libra Esterlina'
    }
  ]

  const [exchange, SelectExchange] = useExchange('Elige tu moneda', EXCHANGES)
  const [crypto, SelectCrypto] = useCrypto('Elige tu criptomoneda', list)

  const { cryptosTickersUrl } = enviroment

  useEffect(() => {
    const fetchAPI = async () => {
      await fetch(cryptosTickersUrl)
        .then(response => response.json())
        .then(({ Data }) => setList(Data))
    }
    fetchAPI()
  }, [])

  const quoteCurrency = e => {
    e.preventDefault()

    if (exchange === '' || crypto === '') {
      setError(true)
      return
    }

    setError(false)
    setExchange(exchange)
    setCrypto(crypto)
  }

  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error msg="Inidique las monedas a cotizar" /> : null}
      <SelectExchange />
      <SelectCrypto />
      <Button type="submit" value="Cotizar" />
    </form>
  )
}

export default Form
