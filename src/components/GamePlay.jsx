import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'


function GamePlay() {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {        
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        };

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} />
                <NumberSelector 
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber} 
                    setSelectedNumber={setSelectedNumber} 
                />
            </div> 
            <RollDice currentDice={currentDice} rollDice={rollDice} />

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button>Show Rules</Button>
            </div>
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
    
    .top_section {
        display: flex;
        justify-content: space-between;
        margin: 50px 60px;
    }

    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-top: 36px;
    }
`;