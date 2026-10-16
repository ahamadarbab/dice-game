import React, { useState } from 'react'
import styled from 'styled-components';


function RollDice({ rollDice, currentDice }) {

    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt='dice 1' />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    p {
        font-size: 24px;
        font-weight: 500;
    }

    .dice {
        cursor: pointer;
    }
`;