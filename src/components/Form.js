import React, { useState, useEffect } from 'react'
import useExchange from '../Hooks/useExchange'
import useCrypto from '../Hooks/useCrypto'
import Error from './Error'
import axios from 'axios'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

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
      nombre: 'Dolar USA',
    },
    {
      id: 1,
      codigo: 'ARS',
      nombre: 'Peso Argentino',
    },
    {
      id: 2,
      codigo: 'EUR',
      nombre: 'Euro',
    },
    {
      id: 3,
      codigo: 'GDP',
      nombre: 'Libra Esterlina',
    },
  ]

  const [exchange, SelectExchange] = useExchange('Elige tu moneda', EXCHANGES)
  const [crypto, SelectCrypto] = useCrypto('Elige tu criptomoneda', list)

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

      const res = await axios.get(url)

      setList(res.data.Data)
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

Form.propTypes = {
  setExchange: PropTypes.func.isRequired,
  setCrypto: PropTypes.func.isRequired,
}

export default Form
