import styled from "styled-components";

export const Button = styled.button`
    background-color: #000000;
    color: white;
    width: 220px;
    height: 44px;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
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

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }
`;