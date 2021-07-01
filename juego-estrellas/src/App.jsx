import React, { useState } from 'react'
import '../src/components/app.css'
import { Game } from './components/Game';
import { Players } from './components/helpers/Players';
import { ListPlayers } from './components/ListPlayers';
import { Login } from './components/Login';



export const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	const [newPlayers, setNewPlayers] = useState(Players)
	const [estaLogueado, setEstaLogueado] = useState(false)


	const addNewPlayer = (player) => {
		setNewPlayers([...newPlayers, player])
		setEstaLogueado(true)
	} 
	
	return (
	
	<>
	
		{
			estaLogueado === true ? (
				<Game key={gameId} 
				startNewGame={() => setGameId(gameId + 1)}
				setEstaLogueado={setEstaLogueado}
				newPlayers={newPlayers}
				/>
			) : (
				<Login handleSubmited = {addNewPlayer} ></Login>
			)
		}


		<div>
			<ListPlayers newPlayers = {newPlayers}></ListPlayers>
		</div>
	</>
	
		
		
		
	)
}


