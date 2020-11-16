import styled from 'styled-components';

export const LoadingCard = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 10px;
    opacity: 0.2;
    background-image: linear-gradient(
        -90deg,
        #3C3C3C 0%,
        #A9A9A9 50%,
        #3C3C3C 100%
    );
    background-size: 400% 400%;
    animation: shimmer 0.9s ease-in-out infinite;

    @keyframes shimmer {
        0%{
            background-position: 0% 0%;
        }
        100%{
            background-position: -135% 0%
        }
    }

    & + div {
        margin-top: 20px;
    }
`;
