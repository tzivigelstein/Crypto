import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

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

  return (
    <Result>
      <Price>
        El precio es de: <span>{quote.PRICE}</span>
      </Price>
      <Info>
        El precio máximo es de: <span>{quote.HIGHDAY}</span>
      </Info>
      <Info>
        El precio mínimo es de: <span>{quote.LOWDAY}</span>
      </Info>
      <Info>
        Variacion dentro de las ultimas 24hs: <span>{quote.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Actualizado: <span>{quote.LASTUPDATE}</span>
      </Info>
    </Result>
  )
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
}
export default Quote
