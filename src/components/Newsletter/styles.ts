import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    min-width: 10%;
    background-color:  #FF6B00;
    color: white;
    margin: 20px 5% 20px 0;
    padding: 20px;
    border: 3px solid #E1E1E1;
    border-radius: 30px;

    .formButton {
        align-self: flex-end;
        background-color: #008df7;
        color:  black;
        flex: 1;

        &:hover{
            opacity: 0.9;
        }
    }
    .formText {
        flex: 2;
    }


    h1 {
        font-size: 40px;
        margin-bottom: 40px;
    }
    p {
        margin-bottom: auto;
    }
`;