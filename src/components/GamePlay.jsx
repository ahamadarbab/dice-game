import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'


function GamePlay() {
  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore />
            <NumberSelector />
        </div> 
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }
`;