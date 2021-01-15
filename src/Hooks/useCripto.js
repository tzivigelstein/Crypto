import React, { Fragment, useState } from 'react';
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

const useCripto = (label, opciones) => {

    //State del Hook

    const [state, setState] = useState('')

    const SeleccionarCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option>Seleccione una Criptomoneda</option>
                {opciones.map(opcion => (
                    <option value={opcion.CoinInfo.Name} key={opcion.CoinInfo.Id}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    //Retornar state, interfaz y funcion que modifica el state

    return [state, SeleccionarCripto]
}

export default useCripto