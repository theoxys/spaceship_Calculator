import styled from 'styled-components';

export const CardContainer = styled.a`
    padding: 20px;
    border-radius: 10px;
    background-color: #3C3C3C;
    border: 3px solid #3C3C3C;
    max-width: 700px;
    width: 100%;
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s;
    color: #E9E9E9;

    &:hover{
        border: 3px solid #e67e22
    }

    & + a{
        margin-top: 30px;
    }

    div{
        margin-left: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        strong{
            font-size: 18px;
        }
        p{
            font-size: 18px;
        }
    }
`;

export const Stops = styled.strong`
    font-size: 18px;
    color: #e67e22;
`;

export const Ukn = styled.p`
    font-size: 18px;
    color: #e67e22;
`;
