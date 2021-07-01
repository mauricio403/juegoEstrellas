import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'


export const Login = ({ handleSubmited}) => {

    const [apodo, setApodo] = useState('')

    let player ={};

    const handleSubmit = (e) => {
        e.preventDefault()
        player.nombre=apodo
        player.puntaje=0
        handleSubmited(player)
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                  id=""
                  label="Ingrese usuario"
                  value ={apodo}
                  onChange = {e => setApodo(e.target.value)}
                  required
                />
                 <button>agregar usuario</button>
            </form>

           
        </div>
    )
}
