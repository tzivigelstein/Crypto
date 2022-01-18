import React from 'react'
import styled from '@emotion/styled'

const Result = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`

const Quote = ({ quote }) => {
  if (Object.keys(quote).length === 0) return null

  const { price, highDay, lowDay, change24Hour, lastUpdate } = quote

  return (
    <Result>
      <Price>
        El precio es de: <span>{price}</span>
      </Price>
      <Info>
        El precio máximo es de: <span>{highDay}</span>
      </Info>
      <Info>
        El precio mínimo es de: <span>{lowDay}</span>
      </Info>
      <Info>
        Variacion dentro de las ultimas 24hs: <span>{`${change24Hour}%`}</span>
      </Info>
      <Info>
        Actualizado: <span>{lastUpdate}</span>
      </Info>
    </Result>
  )
}

export default Quote
