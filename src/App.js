import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Quote from './components/Quote'
import Spinner from './components/Spinner'
import image from './assets/crypto.png'
import styled from '@emotion/styled'
import getCryptoData from './utils/getCryptoData'

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

const Image = styled.img`
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
  const [exchange, setExchange] = useState('')
  const [crypto, setCrypto] = useState('')
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (exchange === '') return
    setLoading(true)
    getCryptoData({ crypto, exchange })
      .then(setQuote)
      .finally(() => setLoading(false))
      .catch(console.error)
  }, [exchange, crypto])

  return (
    <Contenedor>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {Object.keys(quote).length === 0 && loading ? (
          <Spinner />
        ) : (
          <>{Object.keys(quote).length !== 0 ? <Quote quote={quote} /> : <Image src={image} alt="crypto" />}</>
        )}
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form setExchange={setExchange} setCrypto={setCrypto} />
      </div>
    </Contenedor>
  )
}

export default App
