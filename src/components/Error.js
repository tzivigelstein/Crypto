import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Message = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`

const Error = ({ msg }) => {
  return <Message>{msg}</Message>
}

Error.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Error
