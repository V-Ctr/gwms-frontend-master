import styled from 'styled-components';

export const Container = styled.div`
    min-width: 0px;
    max-width: 0%;
    border: 1px solid white;
    border-radius: 0px;
    max-height: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    header {
        background-color: #aeb1b3;
        color: white;
        padding: 20px;
        font-size: 30px;
    }

`;

export const Form = styled.form`
    margin: 20px 10px;
    font-size: 25px;

    p {
        margin-top: 30px;
        color: #aeb1b3;
    }

    input {
        font-size: 20px;
        border-color: #aeb1b3;
        border-radius: 30px 0px 0px 30px;
        padding: 5px 10px;
        height: 40px;
    }
    button {
        font-size: 20px;
        color: white;
        height: 40px;
        width: 40px;
        background-color: #aeb1b3;
        border-color: #aeb1b3;
        border-radius: 0px 30px 30px 0px;

        &:hover {
            cursor: pointer;
        }
    }

    select {
        color: #aeb1b3;
        height: 30px;
        width: 200px;
        font-size: 18px;
        border-color: #aeb1b3;
        border-radius: 30px;
        padding: 0px 10px;
    }

    .slider {
        margin-top: 25px;
        width: 250px;
        color: #aeb1b3;
    }
`;