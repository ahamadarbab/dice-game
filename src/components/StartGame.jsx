import React from 'react'
import styled from 'styled-components'

function StartGame() {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" />
        </div>

        <div className='content'>
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .content h1{
        font-size: 96px;
        font-weight: 700;
        white-space: nowrap;
    }
`;

const Button = styled.button`
    background-color: #000000;
    color: white;
    width: 220px;
    height: 44px;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 15px;
    border: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;