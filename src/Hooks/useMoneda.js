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

const useMoneda = (label, opciones) => {

    //State del Hook

    const [state, setState] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option>Seleccione una Moneda</option>
                {opciones.map((opcion, id) => (
                    <option value={opcion.codigo} key={id}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )

    //Retornar state, interfaz y funcion que modifica el state

    return [state, Seleccionar]
}

export default useMoneda