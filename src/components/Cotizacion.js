import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Resultado = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`

const Parrafo = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`

const Cotizacion = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null

  return (
    <Resultado>
      <Precio>
        El precio es de: <span>{cotizacion.PRICE}</span>
      </Precio>
      <Parrafo>
        El precio máximo es de: <span>{cotizacion.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        El precio mínimo es de: <span>{cotizacion.LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variacion dentro de las ultimas 24hs: <span>{cotizacion.CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Actualizado: <span>{cotizacion.LASTUPDATE}</span>
      </Parrafo>
    </Resultado>
  )
}

Cotizacion.propTypes = {
  cotizacion: PropTypes.object.isRequired,
}
export default Cotizacion
