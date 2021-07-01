import React from 'react'
import { utils } from './helpers/utils';
import { PlayAgain } from './PlayAgain';
import { PlayNumber } from './PlayNumber';
import { StarsDisplay } from './StarsDisplay';
import { useGameState } from './UseGameState';



export const Game = props => {
    const {
      stars,
      availableNums,
      candidateNums,
      secondsLeft,
      setGameState,
    } = useGameState();
  
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 
        ? 'won'
      : secondsLeft === 0 ? props.setEstaLogueado(false) : 'active'
  
    const numberStatus = number => {
      if (!availableNums.includes(number)) {
        return 'used';
      }
  
      if (candidateNums.includes(number)) {
        return candidatesAreWrong ? 'wrong' : 'candidate';
      }
  
      return 'available';
    };
  
    const onNumberClick = (number, currentStatus) => {
      if (currentStatus === 'used' || secondsLeft === 0) {
        return;
      }
  
      const newCandidateNums =
        currentStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);
  
      setGameState(newCandidateNums);
    };
  
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== 'active' ? (
                <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
                <StarsDisplay count={stars} />
            )}
          </div>
          <div className="right">
            {utils.range(1, 9).map(number => (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClick}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };
  