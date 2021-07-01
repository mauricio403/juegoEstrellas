import React from 'react'

export const ListPlayers = ({newPlayers}) => {
    return (
        <div>
            {newPlayers.map(player => <div><p>{player.nombre}</p> <p>{player.puntaje}</p></div>)}
        </div>
    )
}
