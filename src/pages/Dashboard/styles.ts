import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
        align-items: center;
    }
`;

export const Instructions = styled.div`
    margin-top: 30px;
    width:40%;
    height: 90vh;
    padding-right: 20px;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
`;

export const SpaceshipsWrapper = styled.div`
    margin-top: 30px;
    width:60%;
    height: 90vh;
    overflow: auto;
    padding: 0 10px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #e9e9e9;
    font-family: 'Archivo';
    font-weight: bold;
    margin-top: 30px;
    line-height: 40px;
`;

export const Logo = styled.img`
    width: 300px;
    opacity: 0.9;
`;

export const Form = styled.form`
    margin-top: 30px;
    max-width: 700px;

    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 3px solid #fff;
        border-radius: 10px;
        transition: all  0.3s;

        &:hover, &:focus {
            border: 3px solid #e67e22;
        }
    }
`;

export const Subtitle = styled.p`
    color: #e67e22;
    margin-top: 30px;
`;

export const Info = styled.p`
    margin-top: 30px;
    color: #fff;
    opacity: 0.9;

    @media(max-width: 800px) {
        display: none;
    }
`;
