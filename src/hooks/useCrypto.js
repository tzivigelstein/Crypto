import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useCrypto = (label, options) => {
  const [state, setState] = useState('')

  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={e => setState(e.target.value)} value={state}>
        <option defaultValue="default" disabled={state !== ''}>
          Seleccione una Criptomoneda
        </option>
        {options.map(option => (
          <option value={option.CoinInfo.Name} key={option.CoinInfo.Id}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  )

  return [state, SelectCrypto]
}

export default useCrypto
