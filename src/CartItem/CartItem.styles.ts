import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content:space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #001;
    padding-bottom: 20px;
    


    div{
        flex:1;

    }

    .information, .buttons{
        display:flex;
        justify-content: space-between;

    }

    img{
        max-width: 120px;
        object-fit: cover;
        margin-left: 40px;

    }
    @media(max-width: 590px){
        .information,  p{
            font-size: 14px
        }
        .information .info{
            font-size:12px;
        }
        .information .buttons{
            width: 60px;
        }
        .title-cart{
            font-size: 14px;
        }

    }
`;

