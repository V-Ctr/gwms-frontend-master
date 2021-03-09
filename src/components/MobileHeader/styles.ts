import styled, { css } from "styled-components";

interface MenuProps {
    isVisible: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #63bcff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    padding: 10px;
    overflow: hidden;
    
    .menuIcon {
        position: absolute;
        left: 10px;
        width: 80px;

        &:hover{
            opacity: 0.9;
            cursor: pointer;
        }
    }

    .quantity {
        border-radius: 50%;
        width: 18px;
        height: 18px;
        background: black;
        text-align: left;
        font-size: 14px;
        position: absolute;
        right: 30px;
        top: 20px;
        z-index: 1;
        cursor: pointer;
    }

    .cartIcon {
        position: absolute;
        right: 10px;
        width: 80px;
        &:hover{
            opacity: 0.9;
            cursor: pointer;
        }
    }
`;

export const Icon = styled.img`
    width: 0px;
    padding: 5px;
    display: flex;
    justify-content: left;

    &:hover {
      opacity: 0.9;
    }
`;

export const Menu = styled.div<MenuProps>`
    height: 2px;
    width: 10%;
    background-color: #aeb1b3;
    position: absolute;
    top: 80px;
    left: 10;
    border: 1px solid white;
    border-radius: 0 0 20px 0; 
    z-index: 100;
    padding: 20px 20px 20px 5px;
    color: white;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;

    transition: 0.5s;
    ${props => props.isVisible && css`height: 350px; visibility: visible; opacity: 1;`}

    h1 {
        margin-left: 5px;
        display: flex;
    }

    .closeMenu {
        font-size: 10px;
        display: flex;
        margin-left: 76%;
        cursor: pointer;
    }

    ul {
        color: white;
        font-size: 20px;
        flex-direction: column;
        margin: 20px 20px 20px 5px;
    }

    li{
        display: flex;
        justify-content: left;
        align-items: left;
        margin-bottom: 10px;
    }

    a{
        text-decoration: none;
        color: white;
    }

    hr{
        width: 90%;
        color: white;
        margin: 10px
    }
`;
